import axios from 'axios';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // Check if environment variables are set
    if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
      console.error("Missing environment variables: UPSTASH_REDIS_REST_URL or UPSTASH_REDIS_REST_TOKEN");
      return NextResponse.json(
        { 
          success: false, 
          message: 'Server configuration error: Missing Upstash credentials'
        },
        { status: 500 }
      );
    }

    // Parse the request body
    let selectedItems;
    try {
      const body = await request.json();
      selectedItems = body.selectedItems;
    } catch (parseError) {
      console.error("Error parsing request body:", parseError);
      return NextResponse.json(
        { success: false, message: 'Invalid request format' },
        { status: 400 }
      );
    }

    // Validate selectedItems
    if (!selectedItems || !Array.isArray(selectedItems) || selectedItems.length === 0) {
      return NextResponse.json(
        { success: false, message: 'No items selected or invalid format' },
        { status: 400 }
      );
    }

    console.log("Processing vote for items:", selectedItems);
    console.log("Using Upstash URL:", process.env.UPSTASH_REDIS_REST_URL);
    
    const results = [];
    
    // Send vote data to Upstash
    for (const index of selectedItems) {
      const url = `${process.env.UPSTASH_REDIS_REST_URL}/incr/karya:${index}`;
      console.log(`Sending request to: ${url}`);
      
      try {
        const response = await axios.get(
          url,
          {
            headers: {
              Authorization: `Bearer ${process.env.UPSTASH_REDIS_REST_TOKEN}`,
            },
          }
        );
        
        console.log(`Response for item ${index}:`, response.data);
        results.push(response.data);
      } catch (axiosError) {
        console.error(`Error for item ${index}:`, axiosError.message);
        if (axiosError.response) {
          console.error("Response details:", {
            status: axiosError.response.status,
            data: axiosError.response.data
          });
        }
        
        // Continue with other items but track this error
        results.push({ index, error: axiosError.message });
      }
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Votes processed',
      results 
    });
  } catch (error) {
    console.error("Top-level error in vote API:", error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to submit votes',
        error: error.message
      },
      { status: 500 }
    );
  }
}
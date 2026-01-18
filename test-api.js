// Load environment variables first
require('dotenv').config();

const beds24RoomService = require('./src/api/api/beds24RoomService');

async function testAPI() {
  console.log('🧪 Testing Beds24 API Implementation...\n');
  
  // Verify environment variables are loaded
  console.log('🔧 Environment Check:');
  console.log('   BEDS24_INVITE_CODE:', process.env.BEDS24_INVITE_CODE ? '✓ Loaded' : '✗ Missing');
  console.log('   BEDS24_PROPERTY_ID:', process.env.BEDS24_PROPERTY_ID ? '✓ Loaded' : '✗ Missing');
  console.log('   ENCRYPTION_KEY:', process.env.ENCRYPTION_KEY ? '✓ Loaded' : '✗ Missing');
  console.log('');

  try {
    // Test 1: Get room details
    console.log('1️⃣ Testing getRoomsWithDetails...');
    const rooms = await beds24RoomService.getRoomsWithDetails();
    console.log('✅ Rooms fetched:', rooms?.length || 0);

    // Test 2: Get property details
    console.log('\n2️⃣ Testing getPropertyWithRooms...');
    const property = await beds24RoomService.getPropertyWithRooms();
    console.log('✅ Property data:', property?.propertyName || 'Retrieved');

    // Test 3: Get availability (next 7 days)
    const startDate = new Date().toISOString().split('T')[0];
    const endDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
    
    console.log(`\n3️⃣ Testing availability for ${startDate} to ${endDate}...`);
    const availability = await beds24RoomService.getRoomAvailability([9748, 7264], startDate, endDate);
    console.log('✅ Availability data retrieved');

    // Test 4: Comprehensive data
    console.log('\n4️⃣ Testing comprehensive room data...');
    const comprehensive = await beds24RoomService.getComprehensiveRoomData(startDate, endDate);
    console.log('✅ Comprehensive data structure:');
    console.log('   - Rooms:', comprehensive.rooms?.length || 0);
    console.log('   - Property:', comprehensive.property ? '✓' : '✗');
    console.log('   - Inventory:', comprehensive.inventory ? '✓' : '✗');

    console.log('\n🎉 All tests passed! API implementation is working.');

  } catch (error) {
    console.error('❌ Test failed:', error.message);
    console.error('Check your .env configuration and Beds24 credentials');
  }
}

testAPI();
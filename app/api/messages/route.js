import Message from '../../../lib/models/Message';

export async function POST(req) {
  try {
    const body = await req.json(); // Parse the incoming JSON body
    const newMessage = await Message.create({
      user_email: body.user_email,
      content: body.content,
    });
    return new Response(JSON.stringify(newMessage), { status: 201 }); // Return the created message
  } catch (error) {
    console.error('Error creating message:', error);
    return new Response(JSON.stringify({ error: 'Failed to create message' }), { status: 500 });
  }
}

export async function GET() {
  try {
    const messages = await Message.findAll();
    return new Response(JSON.stringify(messages), { status: 200 });
  } catch (error) {
    console.error('Error fetching messages:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch messages' }), { status: 500 });
  }
}

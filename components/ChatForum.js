"use client"
import { useState, useEffect } from 'react';
import { useCreateChatClient, Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';

import 'stream-chat-react/dist/css/v2/index.css';

 const apiKey = 'dz5f4d5kzrue';
const userId = 'flat-firefly-2';
const userName = 'flat';
const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZmxhdC1maXJlZmx5LTIiLCJleHAiOjE3NDIyMDc2NzR9.pJ0sAu2tci3I8fGSz3ECwJRfA6DySyIIHJC_AeCrTUY';
const user  = {
  id: userId,
  name: userName,
  image: `https://getstream.io/random_png/?name=${userName}`,
};

export default  function ChatForum() {
  const [channel, setChannel] = useState();
  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: userToken,
    userData: user,
  });

  useEffect(() => {
    if (!client) return;

    const channel = client.channel('messaging', 'custom_channel_id', {
      image: 'https://getstream.io/random_png/?name=react',
      name: 'Talk about React',
      members: [userId],
    });

    setChannel(channel);
  }, [client]);

  if (!client) return <div>Setting up client & connection...</div>;

  return (
    <Chat client={client}>
      <Channel channel={channel}>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window> 
        <Thread />
      </Channel>
    </Chat>
  );
};
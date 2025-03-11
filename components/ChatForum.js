"use client"
import { useState, useEffect } from 'react';
import { useCreateChatClient, Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';

import 'stream-chat-react/dist/css/v2/index.css';

const apiKey = 'dz5f4d5kzrue';
const userId = 'spring-bar-5';
const userName = 'spring';
const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoic3ByaW5nLWJhci01IiwiZXhwIjoxNzQxNzIyNzEwfQ.lDnw_p6JETqTL6Za2CZZVTe1ztSWoBdbdxNcSC1UqlY';
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
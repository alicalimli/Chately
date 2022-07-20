import React, { useState } from "react";

import { MdSend } from "react-icons/md";
import { VscSmiley } from "react-icons/vsc";
import { BiMicrophone } from "react-icons/bi";
import { RiImageAddLine } from "react-icons/ri";
import { BiUser } from "react-icons/bi";

import elvis from "/src/assets/images/elvis.jpg";
import Messages from "./messages/Messages";

import { TwTrnButton } from "/src/common/components";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const [active, setActive] = useState(false);
  const [user, setUser] = useState(true);

  const sendMessage = (event) => {
    event.preventDefault();

    const timeOptions = {
      hour: "numeric",
      minute: "numeric",
    };

    const time = Intl.DateTimeFormat("en-us", timeOptions).format(new Date());

    setMessage("");
    setMessages((messages) => [
      ...messages,
      { user: user, message: message, time: time },
    ]);
  };

  return (
    <section className="h-screen w-screen justify-center hidden lg:flex bg-muted-light/10 dark:bg-black">
      <div className="w-full flex flex-col gap-4">
        <TwTrnButton addClass="block md:hidden">{`< Back`}</TwTrnButton>
        <header className="border-b border-muted-light/10 dark:border-muted-dark/10 w-full p-4 flex items-center mb-auto flex items-center gap-4 bg-white dark:bg-gray-900">
          <div className="relative bg-transparent h-16 w-16">
            <div className="bg-green-500 p-2 rounded-full absolute right-1 bottom-0"></div>
            <img src={elvis} className="w-full rounded-full" />
          </div>
          <div className="flex flex-col gap-0">
            <h2 className="text-xl text-black dark:text-white">Elvis</h2>
            <p className="text-sm text-muted-light dark:text-muted-dark">
              online
            </p>
          </div>
        </header>

        <Messages messages={messages} />

        <div className="w-full flex items-center relative gap-2 p-4">
          <form
            onSubmit={sendMessage}
            className="w-full flex items-center gap-1 bg-muted-light/10 p-2 dark:bg-gray-900 rounded-xl"
          >
            <button className="text-muted-light/50 dark:text-muted-dark/50 p-2">
              <VscSmiley className="text-2xl" />
            </button>
            <button className="text-muted-light/50 dark:text-muted-dark/50 p-2">
              <BiMicrophone className="text-2xl" />
            </button>
            <button className="text-muted-light/50 dark:text-muted-dark/50 p-2">
              <RiImageAddLine className="text-2xl" />
            </button>
            <button
              onClick={(e) => {
                const btn = e.target.closest("button");

                console.log(active);
                if (active) {
                  setActive(false);
                  btn.style.background = "gray";
                  console.log("not active");
                } else if (!active) {
                  setActive(true);
                  console.log("active");
                  btn.style.background = "blue";
                }

                setUser(!user);
              }}
              className="text-muted-light/50 dark:text-muted-dark/50 p-2"
            >
              <BiUser className="text-2xl" />
            </button>
            <input
              required
              type="text"
              value={message}
              placeholder="Message here"
              className="p-2 px-4 w-full bg-transparent rounded-xl outline-none text-dark dark:text-white"
              onChange={(e) => setMessage(e.target.value)}
              onBlur={(e) => setMessage(e.target.value)}
            />
            <button className="rounded-xl ml-auto p-2 bg-blue-500 flex items-center justify-center active:scale-90 duration-300 hover:bg-blue-400">
              <MdSend className="text-white text-2xl" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ChatBox;

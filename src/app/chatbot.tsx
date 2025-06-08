"use client";
import { useState } from 'react';
import { Dialog } from '@/components/ui/dialog'; // Assuming Dialog is imported from your Shadcn UI component library
import { FaComments } from 'react-icons/fa'; // Importing a chat icon from React Icons
import { Button } from '@/components/ui/button'; // Assuming you have a Button component
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY || "Enter-key" });

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [userMessage, setUserMessage] = useState('');
    const [chatHistory, setChatHistory] = useState<{ sender: string; message: string }[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [botTyping, setBotTyping] = useState(false); // To simulate typing

    // Function to detect and format links in the message
    const formatMessage = (message: string) => {
        const urlPattern = /(https?:\/\/[^\s]+)/g; // Regex to detect links
        return message.split(urlPattern).map((part, index) => 
            urlPattern.test(part) ? (
                <a key={index} href={part} target="_blank" className="text-blue-500">
                    {part}
                </a>
            ) : (
                part
            )
        );
    };

    // Function to interact with the AI model (Gemini API)
    async function main(query: string) {
        try {
            const response = await ai.models.generateContent({
                model: "gemini-2.0-flash",
                contents: query,
                config: {
                    systemInstruction: `You are a chatbot assistant designed to help users with their queries. Provide concise and helpful responses.
                    About our services - We provide a wide range of AI services specialised in calling agents.
                    example - cold calling, lead generation, customer support, marketing, promotion, confirmation/reminder, Scheduling calls.
                    Our website has more information about our services and how we can assist you.
                    If the user asks about booking a demo then give him a link - "https://calendly.com/bolna-ai/30min"`,
                },
            });

            const botMessage = response.text || "Sorry, I couldn't process your request."; 
            simulateBotResponse(botMessage); // Simulate typing effect

        } catch (error) {
            console.log("Error interacting with Gemini API:", error);
            setError("Sorry, there was an issue connecting to the server. Please try again later.");
        }
    }

    // Simulate bot typing by gradually showing the message
    const simulateBotResponse = (message: string) => {
        setBotTyping(true);
        let index = 0;
        setChatHistory((prevHistory) => [
            ...prevHistory,
            { sender: 'bot', message: '' } // Initialize the bot message
        ]);

        const interval = setInterval(() => {
            if (index < message.length) {
                setChatHistory((prevHistory) => {
                    const updatedHistory = [...prevHistory];
                    updatedHistory[updatedHistory.length - 1] = {
                        sender: 'bot',
                        message: message.substring(0, index + 1), // Gradually reveal the message
                    };
                    return updatedHistory;
                });
                index++;
            } else {
                clearInterval(interval);
                setBotTyping(false);
            }
        }, 100); // Adjust typing speed here
    };

    const sendMessage = async () => {
        if (!userMessage.trim()) return;

        // Add user message to chat history
        setChatHistory((prevHistory) => [
            ...prevHistory,
            { sender: 'user', message: userMessage },
        ]);
        setLoading(true);

        try {
            await main(userMessage);
        } catch (error) {
            console.error('Error sending message:', error);
        } finally {
            setUserMessage('');
            setLoading(false);
        }
    };

    return (
        <div>
            {/* Chatbot Icon */}
            <div
                className="fixed bottom-8 right-8 z-50 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <FaComments className="w-12 h-12 text-blue-600" />
            </div>

            {/* Shadcn Dialog for Chatbox */}
            {
                isOpen && <Dialog open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
                    {/* Chat Panel */}
                    <div className="fixed bottom-20 right-8 z-50 w-80 bg-white rounded-lg shadow-lg border border-gray-300 p-4 space-y-4">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold">Chat with us</h3>
                            <Button variant="ghost" onClick={() => setIsOpen(!isOpen)}>Close</Button>
                        </div>

                        {/* Error Handling */}
                        {error && <p className="text-red-500 text-sm">{error}</p>}

                        {/* Chat History */}
                        <div className="space-y-4 overflow-y-auto h-60">
                            {chatHistory.map((chat, index) => (
                                <div key={index} className={chat.sender === 'user' ? 'text-right' : 'text-left'}>
                                    <p className={`p-2 rounded-md inline-block ${chat.sender === 'user' ? 'bg-blue-200' : 'bg-gray-200'}`}>
                                        {formatMessage(chat.message)} {/* Format message to make links clickable */}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* User Input */}
                        <div className="flex items-center space-x-2 mt-4">
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded-md"
                                placeholder="Type your message..."
                                value={userMessage}
                                onChange={(e) => setUserMessage(e.target.value)}
                                disabled={loading}
                                onKeyDown={(e) => {
                                    // Check if the Enter key is pressed (key code 13 or 'Enter')
                                    if (e.key === 'Enter' && !loading) {
                                        sendMessage();
                                    }
                                }}
                            />
                            <Button variant="default" onClick={sendMessage} disabled={loading} className="w-20">
                                {loading ? '...' : 'Send'}
                            </Button>
                        </div>
                    </div>
                </Dialog>
            }
        </div>
    );
};

export default Chatbot;

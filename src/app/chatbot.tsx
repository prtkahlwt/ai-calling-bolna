"use client";
import { useState, useEffect } from 'react';
import { Dialog } from '@/components/ui/dialog'; // Assuming Dialog is imported from your Shadcn UI component library
import { Button } from '@/components/ui/button'; // Assuming you have a Button component
import { GoogleGenAI } from "@google/genai";
import { MessageCircle, Bot } from 'lucide-react'; // Import the new icon

const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY || "Enter-key" });

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [userMessage, setUserMessage] = useState('');
    const [chatHistory, setChatHistory] = useState<{ sender: string; message: string }[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    // const [botTyping, setBotTyping] = useState(false); // To simulate typing
    const [isExpanded, setIsExpanded] = useState(false); // New state for expanded view
    const [showTooltip, setShowTooltip] = useState(true);

    useEffect(() => {
        // Hide tooltip after 3 seconds
        const timer = setTimeout(() => {
            setShowTooltip(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    // Function to detect and format links in the message
    const formatMessage = (message: string) => {
        // First handle bold text
        const boldPattern = /\*\*(.*?)\*\*/g;
        let formattedMessage = message.replace(boldPattern, '<strong>$1</strong>');
        
        // Then handle italic text
        const italicPattern = /\*(.*?)\*/g;
        formattedMessage = formattedMessage.replace(italicPattern, '<em style="font-style: italic;">$1</em>');
        
        // Finally handle links
        const urlPattern = /(https?:\/\/[^\s]+)/g;
        return formattedMessage.split(urlPattern).map((part, index) => 
            urlPattern.test(part) ? (
                <a key={index} href={part} target="_blank" className="text-blue-500">
                    {part}
                </a>
            ) : (
                <span key={index} dangerouslySetInnerHTML={{ __html: part }} />
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
                    systemInstruction: `You are a professional AI assistant for Bolna AI, a company specializing in AI-powered calling solutions. Your role is to provide accurate, helpful, and friendly responses about our services and help users book appointments.

Key Services:
1. Cold Calling: AI-powered outbound calls for lead generation and sales
2. Lead Generation: Automated calling to identify and qualify potential customers
3. Customer Support: 24/7 AI customer service calls for support and assistance
4. Marketing & Promotion: Automated calls for marketing campaigns and promotions
5. Confirmation/Reminder Calls: Automated calls for appointment confirmations and reminders
6. Scheduling Calls: AI-powered calls to schedule meetings and appointments

Important Information:
- We use advanced AI technology to make natural-sounding calls
- Our solutions are customizable for different business needs
- We offer integration with various CRM and business tools
- Our service is available 24/7
- We provide detailed analytics and call reports

Booking Information:
- For booking a demo or consultation, direct users to: https://calendly.com/prateekahlawat1223/smalls-ai-demo
- Demo sessions typically last 30 minutes
- We offer flexible scheduling options

Response Guidelines:
1. Always be professional and friendly
2. Provide specific information about our services when asked
3. If unsure about a query, ask for clarification
4. For pricing inquiries, suggest booking a demo to discuss specific needs
5. For technical questions, provide general information and suggest a demo for detailed discussion
6. Always include the booking link when users express interest in our services

Remember to:
- Keep responses concise but informative
- Highlight the benefits of our AI calling solutions
- Encourage users to book a demo for detailed discussions
- Be proactive in suggesting relevant services based on user queries`,
                },
            });

            const botMessage = response.text || "Sorry, I couldn't process your request.";
            // simulateBotResponse(botMessage); // Simulate typing effect
            // setBotTyping(true);
            // let index = 0;
            setChatHistory((prevHistory) => [
                ...prevHistory,
                { sender: 'bot', message: botMessage } // Initialize the bot message
            ]);

        } catch (error) {
            console.log("Error interacting with Gemini API:", error);
            setError("Sorry, there was an issue connecting to the server. Please try again later.");
        }
    }

    // Simulate bot typing by gradually showing the message with random delays
    // const simulateBotResponse = (message: string) => {
    //     setBotTyping(true);
    //     let index = 0;
    //     setChatHistory((prevHistory) => [
    //         ...prevHistory,
    //         { sender: 'bot', message: '' } // Initialize the bot message
    //     ]);

    //     const interval = setInterval(() => {
    //         if (index < message.length) {
    //             setChatHistory((prevHistory) => {
    //                 const updatedHistory = [...prevHistory];
    //                 updatedHistory[updatedHistory.length - 1] = {
    //                     sender: 'bot',
    //                     message: message.substring(0, index + 1), // Gradually reveal the message
    //                 };
    //                 return updatedHistory;
    //             });
    //             index++;
    //         } else {
    //             clearInterval(interval);
    //             setBotTyping(false);
    //         }
    //     }, Math.random() * 150 + 80); // Randomize typing speed between 80ms and 230ms
    // };

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
            {/* Chatbot Icon with Tooltip */}
            <div className="fixed bottom-8 right-8 z-50">
                {showTooltip && (
                    <div className="absolute bottom-16 right-0 bg-black text-white px-4 py-2 rounded-lg text-sm opacity-0 animate-[fadeIn_0.3s_ease-in_forwards]">
                        Ask Me
                        <div className="absolute bottom-[-8px] right-4 w-4 h-4 bg-black transform rotate-45"></div>
                    </div>
                )}
                <div
                    className="cursor-pointer bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <MessageCircle className="w-8 h-8 text-black-600" />
                </div>
            </div>

            {/* Shadcn Dialog for Chatbox */}
            {
                isOpen && <Dialog open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
                    {/* Chat Panel */}
                    <div className={`fixed bottom-20 right-8 z-50 ${isExpanded ? 'w-[90vw] md:w-[500px]' : 'w-80'} bg-white rounded-lg shadow-lg border border-gray-300 p-4 space-y-4 transition-all duration-300 ease-in-out`}>
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold">Chat with us</h3>
                            <div className="flex items-center space-x-2">
                                <Button
                                    variant="ghost"
                                    onClick={() => setIsExpanded(!isExpanded)}
                                    className="p-2"
                                >
                                    {isExpanded ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                                        </svg>
                                    )}
                                </Button>
                                <Button variant="ghost" onClick={() => setIsOpen(!isOpen)}>Close</Button>
                            </div>
                        </div>

                        {/* Error Handling */}
                        {error && <p className="text-red-500 text-sm">{error}</p>}

                        {/* Chat History */}
                        <div className={`space-y-4 overflow-y-auto overflow-x-hidden ${isExpanded ? 'h-[50vh] md:h-[60vh]' : 'h-60'}`}>
                            {chatHistory.map((chat, index) => (
                                <div key={index} className={`flex ${chat.sender === 'user' ? 'justify-end' : 'justify-start'} w-full`}>
                                    <div className="flex items-start space-x-2 max-w-full">
                                        {/* Avatar for user messages */}
                                        {chat.sender === 'user' ? (
                                            <div className="bg-blue-200 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                                                <span className="text-white">U</span>
                                            </div>
                                        ) : (
                                            <div className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                                                <Bot className="text-gray-600 w-5 h-5" />
                                            </div>
                                        )}
                                        <div className="flex-1 min-w-0">
                                            <p className={`p-2 rounded-md inline-block ${chat.sender === 'user' ? 'bg-blue-200' : 'bg-gray-200'} text-sm break-words whitespace-normal w-full`}>
                                                {formatMessage(chat.message)}
                                            </p>
                                        </div>
                                    </div>
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

// Add this at the end of the file, before the export
const styles = `
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
`;

// Add the styles to the document
if (typeof document !== 'undefined') {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
}

export default Chatbot;

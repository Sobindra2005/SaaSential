import React, { FormEvent, ReactNode } from 'react';
import Button from '@/components/Common/Buttons';
import { ComboBox, XlTextArea } from '@/components/Common/Input';
import List from '@/components/Common/list';
import { Bot, Send } from 'lucide-react';
import { FaCode, FaLightbulb, FaSearch, FaToolbox } from 'react-icons/fa';

const tools = [
    { name: 'Research', icon: <FaSearch size={20} /> },
    { name: 'Brainstorm', icon: <FaLightbulb size={20} /> },
    { name: 'Develop', icon: <FaCode size={20} /> }
];

interface CreateMsgProps {
    isLoading: boolean;
    defaultTool: string;
    showList: boolean;
    selectTool: (tool: string) => void;
    setShowList: (show: boolean) => void;
    containerRef: React.RefObject<HTMLDivElement>;
    onSubmit: (e: FormEvent<HTMLFormElement>) => void; // Optional callback for submission
    input: string;
    setInput: (value: string) => void;
}

export const CreateMsgComponent: React.FC<CreateMsgProps> = ({
    isLoading,
    defaultTool,
    showList,
    selectTool,
    setShowList,
    containerRef,
    onSubmit,
    input,
    setInput
}) => {


    return (
        <div>
            <div className="flex flex-col items-center justify-center w-full  h-[60vh] rounded-xl sticky top-[1/2] right-[1/2]  p-8">
                <Bot size={56} className="mb-6 text-blue-500" />
                <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Start Building with AI</h2>
                <p className="mb-6 text-gray-500 dark:text-gray-400 text-center max-w-md">
                    Describe your idea below and let AI help you bring it to life!
                </p>
                <SendBox
                    input={input}
                    setInput={setInput}
                    onSubmit={onSubmit}
                    isLoading={isLoading}
                    showList={showList}
                    setShowList={setShowList}
                    tools={tools}
                    defaultTool={defaultTool}
                    selectTool={selectTool}
                    containerRef={containerRef}
                />
            </div>
        </div>
    );
};



type SendBoxProps = {
    input: string;
    setInput: (value: string) => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    isLoading: boolean;
    showList: boolean;
    setShowList: (show: boolean) => void;
    tools: { name: string; icon: ReactNode }[];
    defaultTool: string;
    selectTool: (tool: string) => void;
    containerRef?: React.RefObject<HTMLDivElement>;
};

const SendBox: React.FC<SendBoxProps> = ({
    input,
    setInput,
    onSubmit,
    isLoading,
    showList,
    setShowList,
    tools,
    defaultTool,
    selectTool,
    containerRef
}) => {
    return (
        <form onSubmit={onSubmit} className="w-full max-w-2xl  flex gap-3 items-center justify-center">
            <div className='w-full  h-full relative'>
                <XlTextArea
                className='w-full '
                    value={input}
                    onChange={(e) => {
                        setInput(e.target.value);
                        e.target.style.height = 'auto';
                        e.target.style.height = `${e.target.scrollHeight}px`;
                    }}
                    onFocus={(e) => {
                        e.target.style.height = 'auto';
                        e.target.style.height = `${e.target.scrollHeight}px`;
                    }}
                    placeholder='Describe your idea here...'
                    style={{
                        scrollbarWidth: 'thin',
                        scrollbarColor: 'transparent transparent'
                    }}
                    disabled={isLoading}
                    rows={3}
                />
                <ComboBox onClick={() => setShowList(!showList)} name={defaultTool} className='absolute bottom-[10px] right-[2px]' />
            </div>
            <div className='flex flex-col gap-3 justify-center items-center relative'>
                {showList && (
                    <List
                        items={tools}
                        defaultValue={defaultTool}
                        onSelect={selectTool}
                        className='absolute top-[-105%] -left-[350%] lg:left-[0%] min-w-[10rem]'
                        ref={containerRef}
                    />
                )}
                <Button
                    type='button'
                    ButtonType="secondary"
                    className="disabled:opacity-50 transition-all"
                    onClick={() => setShowList(!showList)}
                >
                    <FaToolbox size={18} />
                </Button>
                <Button
                    type='submit'
                    ButtonType="secondary"
                    className="disabled:opacity-50 transition-all"
                    disabled={isLoading || !input.trim()}
                >
                    <Send size={18} />
                </Button>
            </div>
        </form>
    );
};

export default SendBox;

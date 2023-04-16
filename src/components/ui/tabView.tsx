import React, { useState } from 'react';

const TabView = ({ tabs }:any) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="w-full ">
      <div className="border-b border-gray-200">
        <nav className=" flex space-x-8 flex justify-center md:space-x-0">
          {tabs.map((tab:any) => (
            <button
              key={tab.id}
              className={`py-4 px-1 border-b-2 font-medium ${
                activeTab === tab.id
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <div className='flex row'>
                <div className='flex items-center mr-1 '>
                {tab.header.icon}
                </div>
                <div className='flex items-center mr-1'>
                {tab.header.label}
                </div >
              </div>
            </button>
          ))}
        </nav>
      </div>
      <div className="py-8">
        {tabs.map((tab:any) =>
          activeTab === tab.id ? (
            <div key={tab.id}>{tab.content}</div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default TabView;

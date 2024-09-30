chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    
    if (message.action === "videoUpdate") {
      
      fetch(`http://127.0.0.1:5000/?title=${message.title}&url=${message.url}`).then(()=>{
        
        sendResponse({ response: message.title});
        
      });
      
    }
  
  });

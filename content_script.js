// Observe changes in the page's title (which changes with each new video)
const titleObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.type === "childList") {

            const videoTitle = document.title;
            const videoUrl = window.location.href;

            chrome.runtime.sendMessage({
                action: "videoUpdate",
                title: videoTitle,
                url: videoUrl
              }, function(response){
                console.log("Response from background script:", response.response);
              });
          
        }
    });
});

// Target the document's title element
const titleElement = document.querySelector('title');

// Start observing the title for changes
if (titleElement) {
    titleObserver.observe(titleElement, { childList: true });
}

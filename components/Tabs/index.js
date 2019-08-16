// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
const url = 'https://lambda-times-backend.herokuapp.com/topics'
axios.get(url)
.then(response=>{
    let responseData = response.data.topics;
    const tabBar = document.querySelector('.topics')
        responseData.forEach(topic=>{
            const tab = document.createElement('div');
            tab.classList.add('tab');
            tab.textContent = topic;
            tabBar.appendChild(tab)
        })
    })
    .catch(err=>{
        console.error('There was an error with the axios get call')
        console.error("Error: ", err )
    });

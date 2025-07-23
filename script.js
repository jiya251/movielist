  const movieList = [
        {id: 1, title: 'Antman1', Category: 'Action', Rate: 100, Description: 'It is Antman1', Url: 'images/antman1.jpg', videoUrl:'images/1.mp4', audioUrl:'images/1.mp3'},
        {id: 2, title: 'Antman2', Category: 'Comedy', Rate: 200, Description: 'It is Antman2', Url: 'images/antman2.jpg', videoUrl:'images/2.mp4', audioUrl:'images/2.mp3'},
        {id: 3, title: 'Antman3', Category: 'Thriller', Rate: 300, Description: 'It is Antman3', Url: 'images/antman3.jpg', videoUrl:'images/3.mp4', audioUrl:'images/3.mp3'},
        {id: 4, title: 'Avengers1', Category: 'Romance', Rate: 400, Description: 'It is Avengers1', Url: 'images/Avengers1.jpg', videoUrl:'images/4.mp4', audioUrl:'images/4.mp3'},
        {id: 5, title: 'Avengers2', Category: 'Action', Rate: 500, Description: 'It is Avengers2', Url: 'images/Avengers2.jpg', videoUrl:'images/5.mp4', audioUrl:'images/5.mp3'},
        {id: 6, title: 'Avengers3', Category: 'Comedy', Rate: 600, Description: 'It is Avengers3', Url: 'images/Avengers3.jpg', videoUrl:'images/6.mp4', audioUrl:'images/6.mp3'},
        {id: 7, title: 'Avengers4', Category: 'Thriller', Rate: 700, Description: 'It is Avengers4', Url: 'images/Avengers4.jpg', videoUrl:'images/7.mp4', audioUrl:'images/7.mp3'},
        {id: 8, title: 'Avengers5', Category: 'Romance', Rate: 800, Description: 'It is Avengers5', Url: 'images/Avengers5.jpg', videoUrl:'images/8.mp4', audioUrl:'images/8.mp3'},
        {id: 9, title: 'Antman1', Category: 'Action', Rate: 100, Description: 'It is Antman1', Url: 'images/antman1.jpg', videoUrl:'images/9.mp4', audioUrl:'images/1.mp3'},
        {id: 10, title: 'Antman2', Category: 'Comedy', Rate: 200, Description: 'It is Antman2', Url: 'images/antman2.jpg', videoUrl:'images/1.mp4', audioUrl:'images/2.mp3'},
        {id: 11, title: 'Antman3', Category: 'Thriller', Rate: 300, Description: 'It is Antman3', Url: 'images/antman3.jpg', videoUrl:'images/2.mp4', audioUrl:'images/3.mp3'},
        {id: 12, title: 'Avengers1', Category: 'Romance', Rate: 400, Description: 'It is Avengers1', Url: 'images/Avengers1.jpg', videoUrl:'images/3.mp4', audioUrl:'images/4.mp3'},
        {id: 13, title: 'Avengers2', Category: 'Action', Rate: 500, Description: 'It is Avengers2', Url: 'images/Avengers2.jpg', videoUrl:'images/4.mp4', audioUrl:'images/5.mp3'},
        {id: 14, title: 'Avengers3', Category: 'Comedy', Rate: 600, Description: 'It is Avengers3', Url: 'images/Avengers3.jpg', videoUrl:'images/6.mp4', audioUrl:'images/6.mp3'},
        {id: 15, title: 'Avengers4', Category: 'Thriller', Rate: 700, Description: 'It is Avengers4', Url: 'images/Avengers4.jpg', videoUrl:'images/7.mp4', audioUrl:'images/7.mp3'},
        {id: 16, title: 'Avengers5', Category: 'Romance', Rate: 800, Description: 'It is Avengers5', Url: 'images/Avengers5.jpg', videoUrl:'', audioUrl:'images/1.mp3'}
    ];

    const main1 = document.getElementById("main1");

    function show(category) {
        let filteredList = category === 'All' ? movieList : movieList.filter(movie => movie.Category === category);
        main1.innerHTML = "";

        filteredList.forEach(movie => {
            main1.innerHTML += `
                <div class="card">
                    <img src="${movie.Url}" alt="${movie.title}" class="imgCard" />
                    <h2>${movie.title}</h2>
                    <p><strong>Category:</strong> ${movie.Category}</p>
                    <p><strong>Description:</strong> ${movie.Description}</p>
                    <p><strong>Rating:</strong> ${movie.Rate}</p>
                    <video controls>
                        <source src="${movie.videoUrl}" type="video/mp4">
                    </video>
                    <audio controls>
                        <source src="${movie.audioUrl}" audio= "audio/mp3">
    </audio>
                    </div>`;
            });
        }
        show('All'); 
       

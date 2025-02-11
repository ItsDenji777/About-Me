        // Load animation
        var animation = lottie.loadAnimation({
            container: document.getElementById('langbtn'), // The container div
            renderer: 'svg', // 'svg', 'canvas', or 'html'
            loop: false, // Set to false so it doesn't loop automatically
            autoplay: false, // Prevent auto-play
            path: 'https://itsdenji777.github.io/lottie/TI.json' // Path to your Lottie JSON file
        });
    
        var stateA = [20, 0];

        var StateB = [0, 20];

        var currentState = false;

        // Play animation on click
        document.getElementById('langbtn').addEventListener('click', function () {
            if (currentState) {
                animation.playSegments(stateA,true);
            } else {
                animation.playSegments(StateB,true);
            }
            currentState = !currentState;
        });
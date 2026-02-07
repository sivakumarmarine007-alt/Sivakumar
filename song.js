<!-- 🎶 Munbe Vaa Background Music -->
<audio id="munbeVaa" loop preload="auto">
    <source src="munbe_vaa.mp3" type="audio/mpeg">
</audio>

<script>
const song = document.getElementById("munbeVaa");

/* Play with emotional fade-in */
function playMunbeVaa(){
    song.volume = 0;
    song.play();

    let fade = setInterval(() => {
        if (song.volume < 0.9) {
            song.volume += 0.02;
        } else {
            clearInterval(fade);
        }
    }, 200);
}

/* OPTIONAL: stop music smoothly */
function stopMunbeVaa(){
    let fadeOut = setInterval(() => {
        if (song.volume > 0.05) {
            song.volume -= 0.02;
        } else {
            song.pause();
            clearInterval(fadeOut);
        }
    }, 200);
}
</script>
<button onclick="playMunbeVaa()">YES 💖</button>

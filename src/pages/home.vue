<script setup lang="ts">
</script>

<template>
    <div>
        <div class="main">
            <lineloading></lineloading>
            <canvas width="1280" height="720" id="mainbg"></canvas>
            <!-- <video src="assets/video/bg-low.mp4" loop autoplay muted></video> -->
            <overlay class="cli"></overlay>
            <h1>{NULL}</h1>
        </div>
    
        <section class="dleft">
            <div class="wrapper">
                <h1>Some cool text</h1>
                <p>
                    NULL is a special group formed for the sole purpose to compete in school competetions such as but not limited to - Hackaton, WebRace... To see some of our work you can visit our GitHub page below.
                    <br>
                    

                    <!-- **Quotes from all members, individualy and periodically switched** -->

                    <!-- *Everyone has to get their own*
                    List of said quotes: -->

                        <br><br>
                    
                
                </p>
                <div style="text-align: center;">
                    <a class="link" href="https://github.com/ProjNull" target="_blank">Github</a>
                </div>
                
            </div>
        </section>
        <section>
            <div class="wrapper">
                <p>We use all kinds of technologies and languages. Some of those would be Python, JS, Figma or APIs of all sorts.</p>
            </div>
        </section>
        <section class="dright">
            <div class="wrapper">
                <div id="random-quote" style="text-align: center;">
                    "Some things are unchangable, just like the power of old wines." <br><code>- Kaiy, FE & Design</code>
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts">

    let matrix = (ctx:CanvasRenderingContext2D,w:number,h:number,ypos:number[]) => {
        // Draw a semitransparent black rectangle on top of previous drawing
        ctx!.fillStyle = '#0001';
        ctx!.fillRect(0, 0, w, h);
    
        // Set color to green and font to 15pt monospace in the drawing context
        ctx!.fillStyle = '#0f0';
        ctx!.font = '15pt monospace';
    
        // for each column put a random character at the end
        ypos.forEach((y, ind) => {
        // generate a random character
        const text = String.fromCharCode(Math.random() * 128);
    
        // x coordinate of the column, y coordinate is already given
        const x = ind * 20;
        // render the character at (x, y)
        ctx!.fillText(text, x, y);
    
        // randomly reset the end of the column if it's at least 100px high
        if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
        // otherwise just move the y coordinate for the column 20px down,
        else ypos[ind] = y + 20;
        });
    }

    function getRandomInt(max:number) {
        return Math.floor(Math.random() * max);
    }



    var randquote = async () => {
        var container = document.querySelector("div#random-quote") as HTMLElement
        container!.style.opacity = "0"
        var data = (await (await fetch("/json/quotes.json")).json())
        var quote = data[getRandomInt(data.length)]
        container!.style.opacity = "1"
        container!.innerHTML = '"' + quote.quote +'" <br><code>- ' + quote.by + '<code>'    
    }




    export default {
        mounted() {
            const canvas = (document.getElementById('mainbg') as HTMLCanvasElement);
            const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

            // set the width and height of the canvas
            const w = canvas.width = document.body.offsetWidth;
            const h = canvas.height = document.body.offsetHeight;
            const cols = Math.floor(w / 20) + 1;
            const ypos = Array(cols).fill(0);

            setInterval(() => matrix(ctx,w,h,ypos), 50);
            randquote()
        }
    };
</script>
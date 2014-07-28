do_good
=======
Live site [here](http://ben_eysenbach.neocities.org/do_good.html)

Update: I've stopped running the backend server which distributed tasks (primes to check) to users and collected their responses. I want to look into using some sort of distributed database to achieve the same result, but that would be robust against a failure in the central server. It'll probably use [WebRTC](http://www.webrtc.org/); I like the looks of [PrimeCoin](http://primecoin.io/). Fork if interested!

------------
To add to your site, add this line to your HTML header:

```
<script src="do_good.js" type="text/javascript"></script>
```
------------
Text copied from live site:

Checking primality of x

While you're reading this text, your browser is finding prime numbers.  Your probably figured that out
by the little indicator above, but I easily could have hidden it.  In fact, I could install this on every
site you visit, and you'd hardly notice.  The point of this project isn't to find prime numbers. If it
were, I'd be using a real prime-checking algorithm and only check Mersenne Primes. The cool thing is that
I could be solving a real problem, and someone or some company could be paying me for all the work that
people's computers are doing when they visit my site.  I'd much rather donate CPU processes to
advertisers than donate screenspace to their ads.

If you'd like to demo this on your site, just copy the JS to your HTML
header (and preferrably give me credit).

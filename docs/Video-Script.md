# Youtube Video Script


> [!NOTE] This is the **raw** version of the video script
>  Note that some parts didn't make it into the final cut and might not have been recorded verbatim.

## Intro 

In this video, I’ll show you how this little box can identify unknown materials using a laser, why Raman spectroscopy is such a fascinating technique, and how I built a working system at a budget below a thousand euros.

Hi, I’m Jacob - and this is my DIY Raman spectrometer.

Here’s a real measurement taken with this exact build: a common paracetamol tablet. I crush it into a homogeneous powder, load it into a quartz cuvette, give the spectrometer a bit of warm-up time so the detector stabilizes. Then I turn on the laser and take an “exposure” - similar to the shutter in a digital camera.

For this setup, I usually land somewhere between one to ten seconds per acquisition, and I’ll average multiple exposures to improve the signal-to-noise ratio or legibility.

And this is the result: a spectrum - basically a fingerprint made of peaks.

By itself, that plot is just a jagged line. The magic happens when you compare it against a reference spectrum from literature or a reference database. Even without post-processing, you can already see many of the same peak positions lining up. That’s the moment where Raman becomes rewarding and the struggles of the build finally pay off.

I built this whole setup on a "budget" with the goal of identifying unknown substances and to find out what is actually possible with a system that costs merely a fraction of a commercial instrument. I’ll walk you through the design considerations, challenges and limitations - and, of course, capabilities.


## What is Raman?

Now… what even is Raman?

When laser light hits a sample, almost everything that comes back is just the original laser color. That’s common scattering - called Rayleigh scattering - and it’s overwhelmingly bright, which makes it easily observable with the naked eye.

But a tiny fraction of photons actually does something special: they exchange a little bit of energy with the bonds that make up the molecule. That energy exchange shifts the color - or wavelength - of the incoming laser light slightly. This is called Raman scattering.

Those tiny shifts - and how intense they are respectively - encode the molecule’s vibrational structure. That’s the reason a Raman spectrum acts like a fingerprint. Every molecule uniquely interacts with a monochromatic light source, allowing spectra to be compared and matched against a known reference.


## Quick Overview

This is also where the challenge lies:

Raman is inherently weak. Think on the order of one in ten million photons undergoing that energy exchange. To efficiently separate these faint shifted photons, aggressive filters are absolutely integral. Otherwise your detector just sees the intense laser light, while your Raman signal vanishes underneath.

So the whole build is basically a constant battle against stray light and the excitation laser.


Now before diving into it, let's quickly go over the core components needed to make this work.

A 532nm green laser travels through a cleanup filter, hits a 45-degree dichroic beamsplitter and gets focused into the sample by a microscope objective. Then the scattered light comes back through the same objective, the dichroic separates the desired shifted light from the laser, a second long-pass filter cleans it up even more, and then a lens focuses what’s left into a spectrometer that turns it into a plot.

That’s the whole setup really.


## Components - Step-by-Step

Now let’s go step by step

Step one: the laser. (excitation source)
I’m using a cheap 532 nanometer "green" DPSS laser module with 50mW. It’s a great wavelength for DIY Raman because you can get a lot of Raman signal for the given power and shorter wavelengths are more efficient at stimulating Raman scattering.

But that comes with a cost: green excitation also tends to trigger more fluorescence in many organic materials, which will swamp your spectrum. So there’s an immediate tradeoff: sensitivity versus fluorescence.

Step two: laser cleanup. (bandpass filter)
Cheap lasers are not perfectly monochromatic - which means a single wavelength (a common green laser will oftentimes emit wavelengths in a range of say 10nm+- around 532nm). They can also have sidebands, mode hopping, and especially common in cheaper DPSS modules, leak significant amounts of infrared light that you can’t see - which is both dangerous and a problem because it can oversaturate the detector entirely. Most digital camera sensors have a pinkish "hot-mirror" built in front of the sensor for this exact reason.
So, to mitigate this, right after the laser, I use a bandpass filter to tighten up the wavelength. And if you’re using a very cheap DPSS module, you will also want an IR-blocking filter.

Step three: the heart of the configuration - the dichroic beamsplitter. (dichroic longpass mirror)
This is a long-pass dichroic mirror with a cut-on around 550nm, which is designed to be used at a 45 degree angle relative to the incoming light.
It works by strongly reflecting wavelengths below its cut-on point, while transmitting wavelengths above it.

So: the incoming green laser - at 532 nm - gets reflected down into the sample focusing objective.
But the returning scattered light from the sample contains two things at once:  
the original laser wavelength, and the Raman-shifted wavelengths that are slightly longer.
On the way back, the dichroic acts to send most of the laser light away, and it selectively transmits more of the Raman-shifted light, which sits at a longer-wavelength.

Step four: focusing and collection - the microscope objective.
I’m using a 20x infinity-corrected microscope objective.
This has two reasons.
First: focusing. The tighter you focus the laser spot, the higher the energy density on the sample, which ultimately translates to more Raman scattering.
Second: collection. In a so-called backscattering configuration, that same objective also serves to collect the scattered light to send it back along the same optical path.
Infinity-corrected objectives are convenient here because the returning light exits collimated, which facilitates the filtering and focusing downstream and theoretically allows for a more compact build.

Step five: the sample holder.
I’m using a quartz glass cuvette so I can measure both solids and liquids. Quartz glass is convenient, because it is chemically inert and excellent for optical applications. Though, cheap single-use plastic cuvettes also work.

To summarize so far: Laser is cleaned, selectively reflected and focused into the cuvette onto the sample, mainly Rayleigh scattering and a tiny fraction of Raman scattering occurs. Portions of the scattering that happen to hit the front of the microscope objective then get collected to be returned back through the dichroic mirror that now works to separate the signal that contains laser light and wavelength-shifted raman signal.

Step six: the second filter stage - because one filter isn't sufficient
Even after the dichroic, there’s still residual laser light and probably some stray reflections. Remember: Rayleigh is massively stronger than Raman.
So I use a second long-pass filter with the same cut-on around 550nm. This is not angled like the beamsplitter - it’s just a straight filter that further rejects anything at or below the laser wavelength and transmits the shifted light at longer wavelengths.

And yes, there is a compromise baked into this budget choice:
Because the filter cuts on around 550 nm, you lose the very low-shift region close to the laser line. This essentially limits the build to just the Stokes region above wavenumbers roughly above 600. In practice, you’re still capturing the important fingerprint region nicely - just the lower part of the spectrum is cut, as shifted wavelengths between the laser's 532nm and the filter's 550nm are effectively clipped from the spectrum.
That’s a deliberate tradeoff to keep this affordable.

Step seven: focusing into the spectrometer.
After filtering, the light is still collimated - or parallel. Now it needs to be focused into the spectrometer's input.
You can do that directly or you can use an optical fiber.
I’m using a fiber with a 200 micrometer core diameter. It’s convenient but it also makes alignment more sensitive, because now you’re trying to hit a tiny target with a focused spot.
So I use an adjustable mount for lateral positioning, and a small DIY translation stage to precisely dial in the focus.


## The Spectrometer 

Now, let's talk about the spectrometer.
This is a cost-efficient surplus unit commonly found on ebay for $200: the B&W Tek BTC100-2S. It might be older than I am but is probably still one of the more viable options in the price-range. Of course you can also DIY the spectrometer, but that seemed like a frustrating endeavour for someone like me, who had never dealt with optics before. 

In terms of specs it uses a Sony ILX51 linear CCD with roughly two thousand pixels, covers a 200nm range from 400 to 600 nanometers in its original configuration, and has a standard SMA905 fiber input. 
It comes with a 100 micrometer entry slit, with a longpass filter at 495nm in many cases - which doesn't cause problems for this project, so I left it in. It uses a 1800 lines per mm diffraction grating with a blaze at 550 nm and conveniently performs best in our region of interest.

Now the slit matters a lot. It’s one of the primary factors that dictate the spectral resolution: narrower slit gives narrower peaks and thus better separation. But it also starves the detector of light, which hurts signal-to-noise and leaves less room for alignment or collection imperfections.

So when you look at my spectra and notice some peaks blending together or they don't seem very distinct, that’s mainly due to the relatively wide slit.

The spectrometer is powered from 5 volts and communicates data via RS232-to-USB, which the software then plots as a spectrum.


## Why Raman Shift

At this point, we’ve successfully built the optical assembly. But, we still don't know the underlying idea of a Raman spectrum - why it uses wavenumber, opposed to wavelength, as it's commonly found in conventional spectra. This is what ultimately makes Raman measurements comparable, even when using a different wavelength laser.

How?
Because Raman shift directly represents the vibrational energy difference, independent of the excitation - or laser - wavelength.

The conversion is achieved by taking the reciprocal of the laser wavelength, subtracting the reciprocal of the measured wavelength, and then scaling it - that gives you the Raman shift in wavenumber as inverse centimeters.

To better illustrate, just remember the following:
A peak at 1000 cm-1 corresponds to the same molecular vibration whether you use a green laser, a red laser, or a near-infrared laser. That’s what makes Raman libraries possible.


## Challenges and Limitations 

Now, before we go deeper, I want to hit the second big obstacle of Raman - the thing that ruins a lot of first and subsequent attempts and poses a big limitation in identifiable samples:

Fluorescence.
Fluorescence is not Raman scattering. It happens when a molecule absorbs light, gets excited, and then re-emits light at longer wavelengths - so it undergoes a similar Stokes-shift as the Raman signal we're interested in. But: it’s usually broad, intense, and will - in many cases - completely drown out the spectrum.

That’s why many commercial Raman systems use 785 or 1064nm excitation - longer wavelengths tend to trigger less fluorescence.

But there’s a tradeoff again: Raman scattering efficiency drops strongly with longer wavelengths. Roughly speaking, it scales with the inverse fourth power of wavelength - which is why a 532 nm system can generate dramatically more Raman signal than a 1064 nm system at the same power.

With these constraints in mind and a small budget at my disposal, I went with 532nm for stronger Raman efficiency and lower cost optics. Accept that some samples will fluoresce and be difficult, and implement the filtering and stray-light control accordingly, so the system works well on a lot of non-fluorescent or mildly fluorescent molecules.

Now let’s talk about what actually makes this build succeed... or commonly fail.

The system is extremely sensitive to alignment - so angle and position - especially around the dichroic mirror and the fiber coupling. This is why kinematic tip-tilt mounts and finely adjustable stages are beneficial or at least dramatically facilitate getting any usable result at all. I use the KM100 mounts for the laser and the dichroic mirror, as even slight angle deviations will noticeably shift the cut-on wavelength of the dichroic and impair its performance.
On top of that, angled optics can shift the beam slightly due to the internal refraction of the material. So you require either lateral adjustment at the fiber input, or a compensation plate.


## Motorized Kinematic Mounts

To automate the alignment process, I dug through some papers and found one that did exactly this - even using the same kinematic mount. While I think the files weren't provided, the drawings helped me to recreate the setup. 

As described in the paper, I used two cheap stepper motors with drivers and an Arduino MEGA to motorize the tip and tilt mount for the laser. I also combined the Arduino code with a python script that provides convenient control of the positioning via a graphical interface. That just makes for a nicer experience than manually typing serial commands. 

The motors are wired and configured for micro-stepping, which theoretically allows for even finer adjustment - without having to reach into the box. This was somewhat cut short though by the slight play of the 3d-printed coupling that attaches to the stepper's shaft: so whenever I reversed the direction of the motor, some steps didn't actually move the adjustment screw. Since I was under the impression that I had to use a larger .6 nozzle for the carbon fibre PETG - which isn't the case - I had to work with slightly more clearance in the final parts. I used the .6 nozzle throughout the entire project so I plan to get back to iterating this further with the finer nozzle installed now. 

So this is still a work in progress but already a somewhat useful automation - despite the limitations. The vision is to eventually have a fully automated calibration protocol with all the parts motorized. 
But for now it'll have to suffice. 


## Practical Guidelines

Avoid dust, shiny surfaces, internal reflections and - again - alignment errors, as all of this creates stray paths that allow laser light to creep into your detector. 
To mitigate dust from contaminating the delicate and expensive filters, I built a slightly overpressurized glovebox from an IKEA storage box, two PC fans, a HEPA filter and some long-sleeve glove-inserts.
This worked well enough for prototyping but eventually you will want to incorporate the optical assembly into a light- and ingress-protected enclosure with integrated beam-dump and matte-black surfaces to reduce internal reflections. 

Also, choose a slit that matches your goals. For me, I kept the 100 micron slit, as it seems like a practical compromise. If you go narrower, peaks separate better, but you pay with longer integration times and potentially more noise, unless your system is built very efficient.

Now, let’s come back to that first paracetamol spectrum and I'll explain what you’re actually looking at.
Each peak corresponds to a vibrational mode - functional groups of the molecule stretching and bending. The overall pattern across the fingerprint region is mainly what makes identification possible.

And this is also where Raman becomes beautifully complementary to infrared spectroscopy.

While infrared absorption depends on changes in dipole moment, Raman depends on changes in polarizability. That means some vibrations that are weak in IR can be strong in Raman, and vice versa.
So in industry and field-testing, Raman and IR are often used in tandem, because their respective strengths and weaknesses 


## Cost & Parts

Now let’s talk about cost.
The core “essentials” in the build looks consist of:
The surplus spectrometer module, the cheap 532nm laser module, the 550nm dichroic mirror, the 550nm long-pass cleanup filter, the 20x microscope objective, the achromatic doublet - or plano-convex - focusing lens, sample cuvette and a couple of kinematic mounts.

That gets you into the ballpark of roughly 850 euros for the core components. Not included but integral to a functioning prototype are high-quality laser safety glasses from a reputable source - Aliexpress is absolutely not a reputable source for this!. 
Then you'll also need access to a 3d-printer, along with various parts like the precise cage rods, mounts, electronics and chemicals plus PPE for handling them.

So yes - this is still significant instrumentation money, but unlike any available Raman system, not in the tens-of-thousands range. The only reason it’s really possible at all is because we’re mixing professional filtering optics with used spectroscopy hardware and DIY'd and printed mechanics. If you are patient, you might be able to score some high-quality Raman-capable filters suitable for this on eBay, which could significantly reduce the cost down to just a couple hundred euros.


## Ideas for the Future

So where does this go from here?
Better filtering - like a steep notch filter - would let you measure closer to the laser line, but it’s expensive.
A different laser wavelength would reduce fluorescence for many samples but necessitates an entire new stack of optics, which make up most of the build cost.
An upgraded detector, narrower input slit or an entirely different spectrometer would increase resolution and sensitivity.
And on the software side, building a clean pipeline for baseline correction, cosmic spike removal, smoothing, calibration, and then library matching is where this becomes a truly usable identification tool.


## Conclusion

If you want to build one yourself, the project is fully documented as open hardware - with step by step instructions, parts lists, and additional notes. Visit DIYraman on Github or read the docs on docs.diyraman.com. The goal is to make Raman spectroscopy accessible to more people and interested tinkerers. 
On that note, I also highly recommend checking out the OpenRaman-project. It's a brilliant resource, if you want to build a more capable high-performance Raman spectrometer yourself - with the benefit of it being designed by an actual optical engineer. 

If you’re now thinking “damn, I really want one myself” - perfect. That’s the whole point.

Just keep in mind to tinker safely: treat lasers with respect, wear proper protective equipment, and never underestimate the dangers of lasers and their reflections. Your eyes will be forever grateful.

In the future, I will get into surface-enhanced Raman spectroscopy, which uses nanoparticles to dramatically increase the occurrence of Raman scattering. This allows you to detect molecules even in trace quantities and concentrations.
I'm also currently testing the next, improved iteration, that is more compact and significantly cuts the complexity of the build. 

Alright, thanks for watching, I hope you learned something new and enjoyed the video. For more projects, subscribe and let me know what you think in the comments. Bye!
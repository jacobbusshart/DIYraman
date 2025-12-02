# Spectrum Studio Cheatsheet

![Acquisition Software Spectrum Studio showing a raman spectrum of toluene with background subtracted at 3000ms integration time and 5 averages ](../../assets/images_infographic/SpectrumStudio_Overview_Raman-Toluene_JPG.jpg)

SpectrumStudio is the original **control and acquisition software** for the BTC110 / B&W Tek OEM spectrometer used in DIYraman.  

[Click to Download - SpectrumStudio](https://drive.google.com/file/d/1ooKja8GXg5gMX-swFjbmAXFP61ucyWT_/view?usp=sharing)

**It is used to:**
- Set **integration time** and **averaging**
- Apply **background subtraction**
- Use a **wavelength calibration**
- Save spectra as **CSV** for analysis and open-hardware documentation


> [!NOTE] Adapted from software handbook
> The following reference is summarized and adapted from the handbook built in to the software. More information can be found in SpectrumStudio under *Help* → *Contents* or by pressing *CTRL+F1*.


---

## Minimal workflow

1. **Detect the spectrometer**  
   Click ![Detect spectrometers](../../assets/images_picked/SpectrumStudio-Icons/NewSerial%201.png) → creates a tab for each device.

2. **Set exposure & noise level**  
   - **Integration time:** type value in the *Integration Time* box (e.g. `50 ms`, `250 ms`, `2500 ms`).  
   - **Averages:** set a small number (e.g. `3–15`) in *Averages*.

3. **Start measuring**  
   - Live view: ![Scan continuously](../../assets/images_picked/SpectrumStudio-Icons/Play%201.png) (*Scan Continuously*)  
   - Single snapshot: ![Scan once](../../assets/images_picked/SpectrumStudio-Icons/PlayOnce%201.png) (*Scan Once*)

4. **Set a dark background (recommended)**  
   - Block light (objective capped / finger on input).  
   - Take a scan, then click ![Set background](../../assets/images_picked/SpectrumStudio-Icons/Background2%201.png) (*Use current scan as background*).  
   → All future spectra are **background-subtracted**.

5. **Scan again**  
   - Take another scan.
   → Now the output spectrum is background-subtracted.
   - When adjusting the *integration time*, record a new background to subtract.

6. **Save spectrum data**  
   - Click ![Save](../../assets/images_picked/SpectrumStudio-Icons/Save%201.png) or **File → Save As…**  
   - Store the CSV together with: sample ID, integration time, averages, background on/off, calibration version.

5. **(Optional, as-needed) Adjust wavelength calibration**  
   - Record a lamp (CFL/neon).  
   - Click ![Calibration](../../assets/images_picked/SpectrumStudio-Icons/Settings%201.png) and tweak coefficients so known lines match their wavelengths.

---

## Essential features at a glance

**Text fields:**
- *Integration Time* – exposure in ms (typ. 50–65000 ms).  
- *Averages* – number of scans the PC averages before showing one spectrum.

| Icon                                                     | Control                                         | What it does (in one sentence)                                                                                                              |
| -------------------------------------------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Detect](../../assets/images_picked/SpectrumStudio-Icons/NewSerial%201.png)                                 | **Detect Spectrometers**                        | Scans all COM ports and opens one tab per detected spectrometer.                                                                            |
| ![Scan continuously](../../assets/images_picked/SpectrumStudio-Icons/Play%201.png)                           | **Scan Continuously**                           | Repeats scans with current settings for a live spectrum view.                                                                               |
| ![Scan once](../../assets/images_picked/SpectrumStudio-Icons/PlayOnce%201.png)                               | **Scan Once**                                   | Acquires exactly one spectrum - or number of *Averages* - defined.                                                                          |
| ![Stop](../../assets/images_picked/SpectrumStudio-Icons/Stop%201.png)                                        | **Stop**                                        | Finishes the current scan and then stops continuous acquisition.                                                                            |
| ![Set background](../../assets/images_picked/SpectrumStudio-Icons/Background2%201.png)                       | **Set Background**<br>/<br>**Clear Background** | Stores current spectrum as dark/background and subtracts it from future scans.<br>/<br>Disables background subtraction (background = zero). |
| ![Log on](../../assets/images_picked/SpectrumStudio-Icons/StreamData%201.png) / ![Log off](../../assets/images_picked/SpectrumStudio-Icons/NoStreamData%201.png) | **Log Data** (On/Off)                           | When enabled, every finished spectrum is written to disk (see Options → Data Logging).                                                      |
| ![Calibration](../../assets/images_picked/SpectrumStudio-Icons/Settings%201.png)                             | **Wavelength Calibration**                      | View or edit pixel→wavelength polynomial coefficients.                                                                                      |

---

## Graph interaction & cursors

| Icon                                                                        | Action                 | Use it for                                                                                                  |
| --------------------------------------------------------------------------- | ---------------------- | ----------------------------------------------------------------------------------------------------------- |
| ![Pointer](../../assets/images_picked/SpectrumStudio-Icons/Pointer%201.png) | **Pointer / Default**  | Move **cursors** and interact normally with the graph.                                                      |
| ![Pan](../../assets/images_picked/SpectrumStudio-Icons/Pan%201.png)         | **Pan**                | Drag the view around (hold **Ctrl** over the graph for temporary pan).                                      |
| ![ZoomXY](../../assets/images_picked/SpectrumStudio-Icons/ZoomXY%201.png)   | **Zoom X+Y**           | Draw a rectangle to zoom into a region (hold **Shift** for temporary zoom).                                 |
| ![ZoomX](../../assets/images_picked/SpectrumStudio-Icons/ZoomX%201.png)     | **Zoom X**             | Zoom only along wavelength/pixel.                                                                           |
| ![ZoomY](../../assets/images_picked/SpectrumStudio-Icons/ZoomY%201.png)     | **Zoom Y**             | Zoom only along intensity.                                                                                  |
| ![ZoomOut](../../assets/images_picked/SpectrumStudio-Icons/ZoomOut%201.png) | **Zoom Out**           | Step back out of previous zoom levels (right-click on the graph).                                           |
| ![Cursors](../../assets/images_picked/SpectrumStudio-Icons/Cursors%201.png) | **Cursors / Line ID**  | Show a vertical cursor for precise wavelength/line lookup and a horizontal cursor for intensity comparison. |
| ![YAxis](../../assets/images_picked/SpectrumStudio-Icons/YAxis%201.png)     | **Linear / Log scale** | Switch Y-axis between linear and logarithmic intensity.                                                     |

---

[Spectrometer Unit](Spectrometer%20Unit.md)
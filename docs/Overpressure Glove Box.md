# Overpressure Glove Box

![Overview of the overpressure glove box](../../assets/images_pictures/Overview-Video-Pic_3_1400px_JPG.jpg)

Build a simple overpressure glove box to keep dust and airborne contaminants away from your Raman optics while you mount and align sensitive components such as the dichroic beamsplitter and longpass filter.

In this configuration, two fans push air **into** the box through a HEPA filter. The slight overpressure forces air out through any small leaks or gaps, so dust-laden air from the room cannot enter the enclosure.

> [!NOTE] Why overpressure?
> - **Sealed box:** Better than working in open air, but leaks and each opening event can let dust in.
> - **Underpressure (negative pressure):** Used when you must contain hazardous materials - all inlet and outlet paths must be carefully filtered.
> - **Overpressure (this design):** Easier to build for DIY use. Incoming air is filtered once; leaks push clean air *out* instead of pulling dirty air *in*.

This glove box is sized around an off‑the‑shelf IKEA SAMLA box but the concept works with any similar transparent container that can take cut‑outs for fans, filter and glove ports.

---

## Parts and Materials

### Sourced parts

> [!TIP] Quantities and lengths
> The exact screw lengths and fan model are not critical. Use comparable sizes and adjust where needed.

| Qty | Name         | Model / example                             | Source                                                                                                | Notes                                                                                      |
| --- | ------------ | ------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| 1×  | Box with lid | IKEA SAMLA, transparent, 57 × 39 × 42 cm    | [IKEA SAMLA box with lid](https://www.ikea.com/de/en/p/samla-box-with-lid-transparent-s99440774/)     | Any similar box works; a separate lid that forms a tight seal is ideal.                    |
| 1×  | HEPA filter  | IKEA UPPATVIND                              | [IKEA UPPATVIND filter](https://www.ikea.com/de/en/p/uppatvind-filter-for-particle-removal-90551498/) | Any HEPA / fine dust filter of similar size works. Higher filtration = more pressure drop. |
| 2×  | PC fan       | 120 mm PC fan                               | Any                                                                                                   | 12 V DC fans. Check current draw and airflow rating.                                       |
| 1×  | Power supply | 12 V DC with barrel plug                    | Any                                                                                                   | Can also be 12.6 V. Make sure current rating ≥ sum of both fans.                           |
| 1×  | Gloves       | Long‑sleeved chemical or dishwashing gloves | Any                                                                                                   | Choose gloves long enough to reach all areas inside the box.                               |
| 14× | M4 screw     | Hex socket head cap screw                   | Any                                                                                                   | Mixture of lengths below.                                                                  |
| 4×  |              | M4 × 12 mm                                  |                                                                                                       | Short screw length.                                                                        |
| 4×  |              | M4 × 16 mm                                  |                                                                                                       | Medium screw length.                                                                       |
| 2×  |              | M4 × 20 mm                                  |                                                                                                       | For thicker walls / stacked parts.                                                         |
| 4×  |              | M4 × 65 mm                                  |                                                                                                       | For clamping filter + fan + brackets through the box wall.                                 |
| 14× | M4 nut       | Any M4 nut                                  | Any                                                                                                   | Matching the M4 screws.                                                                    |

### 3D‑printed parts

> [!NOTE] Downloading the STL files  
> All STL files are provided in the project repository. Parts are listed here with their role in the glove box.

| Qty | Name                            | Used in                  | Source   | Notes                      |
| --- | ------------------------------- | ------------------------ | -------- | -------------------------- |
| 1×  | Fan_Connector‑Bracket           | Fan / filter assembly    | Download | Links fans to baseplate.   |
| 1×  | Fan_Baseplate                   | Fan / filter assembly    | Download | Sits against the box lid.  |
| 2×  | Filter_Holder‑Clamp             | Fan / filter assembly    | Download | Clamps the HEPA filter.    |
| 4×  | Fan_Outer‑Bracket               | Fan / filter assembly    | Download | Outer support brackets.    |
| 2×  | Glove‑Insert_Inner              | Glove ports              | Download | Sits inside the lid.       |
| 2×  | Glove‑Insert_Outer‑Ring         | Glove ports              | Download | Clamps glove in the lid.   |
| 1×  | Large‑Insert_Inner              | Large service port       | Download | For larger access port.    |
| 1×  | Large‑Insert_Threaded‑Cover     | Large service port       | Download | Threaded inner cover.      |
| 1×  | Large‑Insert_Outer‑Cover‑Open   | Large service port       | Download | Open cover variant.        |
| 1×  | Large‑Insert_Outer‑Cover‑Closed | Large service port       | Download | Fully closed cover.        |
| 1×  | Cable‑Insert_Inner              | Cable / feedthrough port | Download | Sits inside the wall.      |
| 1×  | Cable‑Insert_Nut                | Cable / feedthrough port | Download | Locks insert from outside. |
| 1×  | Cable‑Insert_Cover              | Cable / feedthrough port | Download | Closes port when unused.   |

### Notes for printing

> [!TIP] Suggested print settings  
> - Material: PETG(-CF) or ABS recommended for best strength.  
> - Layer height: 0.2 mm.  
> - Infill: 30–40 % gyroid or cubic.  
> - Perimeters: ≥ 3 perimeters (walls) for brackets and inserts.  
> - Colour: Any - black preferred; opaque colours reduce stray light inside the box.

All parts are designed to print without support on a typical 0.6 mm nozzle - 0.4 is even better but sub-optimal for abrasive PETG-CF. For parts that clamp the box wall (fan brackets and glove inserts), ensure accuracy of holes and circular cutouts. If your printer tends to undersize holes, you can slightly scale the part in X/Y or adjust hole compensation in your slicer.

---

## Instructions

### 1. Preparing the box

![Transparent plastic container with lid and cutouts – final result](../../assets/images_picked/Overpressure-Glovebox/Overpressure-Glovebox_0-Overview_1_PNG.png)

In this section you mark and cut all openings in the box and lid: the fan / filter opening, glove ports, cable feedthrough and large service port.

#### Step 1.1 – Marking the cutouts

![Top template for marking fan and filter opening](../../assets/images_picked/Overpressure-Glovebox/Overpressure-Glovebox-Template-Top_A4_PNG.png)

> [!NOTE] Printable template  
> An A4 PDF template is provided in the repository. Print at **100 % scale (no scaling)** and check at least one dimension with a ruler before cutting.

1. Clean the outer surfaces of the box and lid so masking tape will adhere.  
2. On the **top** of the box, tape the printed template in place and align it with the centre of the lid as shown in the PDF / images.  
3. Mark the following on the box with a non‑permanent marker:  
   - **Main fan/filter opening:** 250 × 195 mm rectangular cutout.  
   - **Fan mounting holes:** 4 × holes at the corners for M4 screws (drill 4 mm).  
4. On the **front side of the lid**, mark two circular openings for the glove ports:  
   - **Glove inserts:** 2 × circles, 96 mm diameter each.  
5. On the **left side of the box**, mark:  
   - **Large insert:** 1 × circle, 72 mm diameter.  
   - **Cable insert:** 1 × hole, 12 mm diameter.

![Top of the box with rectangular cutout and four drilled holes for fan/filter assembly](../../assets/images_picked/Overpressure-Glovebox/Overpressure-Glovebox_1-Cutting_4_PNG.png)

![Front of the lid with two circular cutouts for glove inserts](../../assets/images_picked/Overpressure-Glovebox/Overpressure-Glovebox_1-Cutting_6_PNG.png)

![Left side of the box with one large circular cutout and one small hole](../../assets/images_picked/Overpressure-Glovebox/Overpressure-Glovebox_1-Cutting_5_PNG.png)

> [!WARNING] Check dimensions twice  
> Before cutting, verify all positions and diameters with the corresponding 3D‑printed inserts. The parts should cover a few millimetres of plastic around each cutout for a good seal.

#### Step 1.2 – Cutting and drilling

![Cutting the openings in the plastic box](../../assets/images_picked/Overpressure-Glovebox/Overpressure-Glovebox_1-Cutting_7_PNG.png)

1. Drill a starter hole inside each closed shape (rectangles / circles) using a drill bit sized for your cutting tool (e.g. 6–8 mm).  
2. For the **rectangular top opening**, insert a fine‑tooth jigsaw blade or rotary tool and carefully cut along the marked lines.  
3. For the **circular openings**, use a hole saw, step bit, or carefully cut along the line with a rotary tool.  
4. Drill the **M4 mounting holes** (4 mm diameter) at the marked fan / filter positions.  
5. Deburr all edges with a file or fine sandpaper so the printed parts sit flush.

![Deburring and finishing the cutouts](../../assets/images_picked/Overpressure-Glovebox/Overpressure-Glovebox_1-Cutting_8_PNG.png)

> [!WARNING] Cutting plastic safely  
> - Wear safety glasses and a dust mask.  
> - Clamp the box securely so it cannot move while cutting.  
> - Work slowly to avoid cracking the plastic.

---

### 2. Fan assembly

![Printed fan baseplate and brackets with fan](../../assets/images_picked/Overpressure-Glovebox/Overpressure-Glovebox_2-FanAssembly_1_PNG.png)

In this step you assemble the fan on its printed baseplate and outer brackets.

#### Step 2.1 – Mount the fan to the baseplate

![Attaching the fan to the printed baseplate](../../assets/images_picked/Overpressure-Glovebox/Overpressure-Glovebox_2-FanAssembly_2_PNG.png)

1. Place the `Fan_Baseplate` on your workspace with the flat side down.  
2. Orient the 120 mm fan so that it will **blow air into the box** when mounted (the airflow arrow on most fans should point towards the box).  
3. Align the fan’s mounting holes with those in the `Fan_Baseplate`.  
4. Use four suitable screws (e.g. M4 × 12 mm) to fasten the fan to the baseplate.

> [!TIP] Fan orientation  
> If your fan has a label and struts on one side: usually the **strut side** is the air outlet. For this design, the outlet should face **towards the box**.

#### Step 2.2 – Attach outer brackets

![Adding outer brackets and connector bracket](../../assets/images_picked/Overpressure-Glovebox/Overpressure-Glovebox_2-FanAssembly_3_PNG.png)

![Outer brackets detail](../../assets/images_picked/Overpressure-Glovebox/Overpressure-Glovebox_2-FanAssembly_4_PNG.png)
![Outer brackets from different angle](../../assets/images_picked/Overpressure-Glovebox/Overpressure-Glovebox_2-FanAssembly_5_PNG.png)
![Assembled fan module with brackets](../../assets/images_picked/Overpressure-Glovebox/Overpressure-Glovebox_2-FanAssembly_6_PNG.png)

1. Attach the `Fan_Connector‑Bracket` and `Fan_Outer‑Bracket`s to the `Fan_Baseplate` according to the exploded view in the project files.  
2. Use M4 screws and nuts where provided to secure the brackets.  
3. Double‑check that all parts sit flat and that nothing interferes with the fan blades.

---

### 3. Mounting fan and filter on the box

![Box with cutouts ready for mounting fan and filter](../../assets/images_picked/Overpressure-Glovebox/Overpressure-Glovebox_3-Mounting_1_PNG.png)
![Test‑fitting the fan module on the top opening](../../assets/images_picked/Overpressure-Glovebox/Overpressure-Glovebox_3-Mounting_2_PNG.png)

In this step you clamp the HEPA filter and the fan assembly to the top of the box.

#### Step 3.1 – Position the HEPA filter

![Positioning the HEPA filter over the top cutout](../../assets/images_picked/Overpressure-Glovebox/Overpressure-Glovebox_3-Mounting_3_PNG.png)
![Aligning filter edges and mounting holes](../../assets/images_picked/Overpressure-Glovebox/Overpressure-Glovebox_3-Mounting_4_PNG.png)

1. Place the box so that the top opening faces upwards.  
2. Lay the HEPA filter on the **inside** of the lid or box top so it completely covers the 250 × 195 mm rectangular cutout.  
3. Align the edges so that the filter frame sits evenly and there is enough overlap for a good seal.  
4. The filter should stay in place on its own, sitting on the outer lip.

![Placing printed filter holder clamps inside the box](../../assets/images_picked/Overpressure-Glovebox/Overpressure-Glovebox_3-Mounting_5_PNG.png)
![Filter clamped with printed parts](../../assets/images_picked/Overpressure-Glovebox/Overpressure-Glovebox_3-Mounting_6_PNG.png)

5. Position the `Filter_Holder‑Clamp` parts on the inside, over the filter frame, aligned with the drilled M4 holes.

#### Step 3.2 – Clamp fan and filter together

![Inserting long screws through fan, lid and filter clamps](../../assets/images_picked/Overpressure-Glovebox/Overpressure-Glovebox_3-Mounting_7_PNG.png)
![Tightening nuts to clamp filter and fan](../../assets/images_picked/Overpressure-Glovebox/Overpressure-Glovebox_3-Mounting_8_PNG.png)
![View from inside showing filter clamped](../../assets/images_picked/Overpressure-Glovebox/Overpressure-Glovebox_3-Mounting_9_PNG.png)
![Fan and filter fully mounted – outside view](../../assets/images_picked/Overpressure-Glovebox/Overpressure-Glovebox_3-Mounting_10_PNG.png)
![Fan and filter fully mounted – inside view](../../assets/images_picked/Overpressure-Glovebox/Overpressure-Glovebox_3-Mounting_11_PNG.png)
![Fan and filter assembly close‑up](../../assets/images_picked/Overpressure-Glovebox/Overpressure-Glovebox_3-Mounting_12_PNG.png)

1. Place the assembled fan module on the **outside** of the box, over the rectangular opening.  
2. Align the fan bracket holes with the drilled M4 holes and the `Filter_Holder‑Clamp`s inside the box.  
3. Insert four long M4 screws (e.g. M4 × 65 mm) from the outside through: fan bracket → box lid → filter clamp.  
4. On the inside, place M4 nuts on each screw and tighten them evenly until the filter and fan are clamped firmly and the plastic deforms only slightly.  
5. Verify that the fan blades spin freely and that the filter frame is compressed all around for a good seal.

> [!WARNING] Do not overtighten  
> Excessive torque on the screws may crack the box wall or warp the filter frame. Tighten only until nothing moves when pushed gently.

---

### 4. Box inserts (cable and service ports)

![Overview of printed inserts installed in the side wall](../../assets/images_picked/Overpressure-Glovebox/Overpressure-Glovebox_4-Inserts_1_PNG.png)

This section covers the smaller side ports: a cable feedthrough and a larger service port (65–72 mm insert).

#### Step 4.1 – Cable insert

![Cable insert – inside view](../../assets/images_picked/Overpressure-Glovebox/Overpressure-Glovebox_4-Inserts_2_PNG.png)
![Cable insert – parts and assembly](../../assets/images_picked/Overpressure-Glovebox/Overpressure-Glovebox_4-Inserts_5_PNG.png)
![Cable insert – outside view with nut](../../assets/images_picked/Overpressure-Glovebox/Overpressure-Glovebox_4-Inserts_3_PNG.png)
![Cable insert – cover installed](../../assets/images_picked/Overpressure-Glovebox/Overpressure-Glovebox_4-Inserts_4_PNG.png)

1. From the **inside** of the box, insert the `Cable‑Insert_Inner` through the 12 mm cable hole.  
2. From the **outside**, thread the `Cable‑Insert_Nut` onto the protruding part and hand‑tighten until the box wall is clamped firmly between the two parts.  
3. When no cables are routed, close the port with the `Cable‑Insert_Cover`.  
4. To route a cable, remove the cover, feed the cable through, and reseal as well as possible with tape or a custom drilled cover.

#### Step 4.2 – Large service insert (65–72 mm)

![Large service insert – inner part](../../assets/images_picked/Overpressure-Glovebox/Overpressure-Glovebox_4-Inserts_6_PNG.png)
![Large service insert – outer open cover](../../assets/images_picked/Overpressure-Glovebox/Overpressure-Glovebox_4-Inserts_7_PNG.png)
![Large service insert – outer closed cover](../../assets/images_picked/Overpressure-Glovebox/Overpressure-Glovebox_4-Inserts_8_PNG.png)
![Large service insert fully assembled](../../assets/images_picked/Overpressure-Glovebox/Overpressure-Glovebox_4-Inserts_9_PNG.png)

1. From the **inside** of the box, place the `Large‑Insert_Inner` into the 72 mm side opening.  
2. From the **outside**, align the appropriate outer cover (`Large‑Insert_Outer‑Cover‑Open` or `Large‑Insert_Outer‑Cover‑Closed`) and fasten it to the inner part according to the design (screws or bayonet lock).  
3. Use the **closed cover** when maximum sealing is required.  
4. Use the **open cover** variant to pass larger objects in or out of the box while keeping the opening controlled and easy to re‑seal.

---

### 5. Gloves

![Glove ports and gloves mounted in the lid](../../assets/images_picked/Overpressure-Glovebox/Overpressure-Glovebox_5-Gloves_1_PNG.png)

#### Step 5.1 – Choosing gloves

Select gloves that:  
- Are **long enough** to reach all areas in the box.  
- Have a **cuff diameter** compatible with the `Glove‑Insert_Inner` and `Glove‑Insert_Outer‑Ring`.  
- Are made from a material resistant to any solvents or chemicals you expect to use (e.g. nitrile or thicker dishwashing gloves).

> [!TIP] Test fit one glove first  
> Before assembling both ports, test the fit with one glove and adjust how far you roll the cuff to achieve a good seal and comfortable reach.

#### Step 5.2 – Mounting the glove screw‑on inserts

![Mounting glove on inner insert](../../assets/images_picked/Overpressure-Glovebox/Overpressure-Glovebox_5-Gloves_2_PNG.png)
![Clamping glove with outer ring](../../assets/images_picked/Overpressure-Glovebox/Overpressure-Glovebox_5-Gloves_3_PNG.png)
![Glove insert fully mounted in lid](../../assets/images_picked/Overpressure-Glovebox/Overpressure-Glovebox_5-Gloves_4_PNG.png)

1. Turn the lid so the **inside** faces up. Insert the `Glove‑Insert_Inner` into one of the 96 mm circular openings from the inside.  
2. Slide the glove cuff over the inner insert so that ~3–5 cm of the glove overlaps the flange.  
3. Place the `Glove‑Insert_Outer‑Ring` over the glove from the outside of the lid and push it onto the inner insert, clamping the glove material in between.  
4. Ensure the glove is clamped evenly all around and cannot be pulled out by gentle force.  
5. Repeat the procedure for the second glove port.

> [!WARNING] Do not overstretch the glove cuff  
> Overstretching can lead to tears. If the glove material feels too tight, choose a larger insert size or a different glove model.

---

### 6. Wiring and first test

#### Step 6.1 – Connect fans to the power supply

> [!DANGER] Mains safety  
> If you need to modify a mains‑powered supply, only do so if you are qualified to work with mains voltages. Otherwise use an off‑the‑shelf, enclosed 12 V supply and keep all mains wiring outside the glove box.

1. Connect both 120 mm fans **in parallel** to the 12 V DC output of your power supply:  
   - All positive (red) wires together to **+12 V**.  
   - All negative (black) wires together to **GND**.  
2. If you want adjustable airflow, you can add a simple fan controller or a PWM speed control module between the supply and the fans.  
3. Route the fan power cable along the box by taping it or at least make sure it won't accidentally get into the fan blades.

#### Step 6.2 – Check overpressure and leaks

1. Close the lid and ensure all ports (large insert, cable insert, glove rings) are fully assembled.  
2. Turn on the fans. After a few seconds, the lid may bulge slightly as pressure builds.  
3. Hold a thin strip of tissue paper or incense stick **near** (not inside) suspected leak points around the lid and inserts: the strip should blow **outwards**, not be sucked in.  
4. If you detect inward leaks, check and re‑seat the inserts or consider adding sealing tape.

Your overpressure glove box is now ready to use for clean assembly of the Raman optical components.

---

## Continue reading

- [Basic Raman Optical Assembly](Basic%20Raman%20Optical%20Assembly.md)  
- [Linear Translation Stage](Linear%20Translation%20Stage.md)

# Basic Raman Optical Assembly

![Basic Raman optical assembly overview](../../assets/images_picked/Raman-Optical-Assembly/FULL-Basic-Assembly-1400px_Screenshot_PNG-1.png)

Build the basic optical assembly for the DIYraman setup in a *backscattering* configuration. This module provides the minimum optical path you need to record your first Raman spectra.

The design shown here is built around a surplus [B&W Tek spectrometer module](https://www.ebay.com/itm/143989529085), which is commonly available on the used market for around 200€. Other spectrometers with a similar input geometry / SMA905-connector can also be adapted.

For cost reasons, this setup uses a low-cost 532 nm green laser pointer together with a dichroic mirror (cut-on 550 nm) and a longpass filter (cut-on 550 nm). You can find more information in the [Parts and Materials](#Parts%20and%20Materials) section below. Because the laser operates at 532 nm and the filters begin transmitting at 550 nm, the usable Raman signal will be in the Stokes region above roughly 600 cm⁻¹.


> [!NOTE] Full vs. Basic Optical Assembly  
> The [Full Raman Optical Assembly](Full%20Raman%20Optical%20Assembly.md) incorporates the [Linear Translation Stage](Linear%20Translation%20Stage.md) along with two stepper motors to motorise the kinematic laser mount for convenience.  
> The basic setup on this page is intentionally simpler and sufficient to capture your first Raman signals.

---

## Parts and Materials

### Printed parts

| Qty  | Part name (.stl)         | Used for                                    |
| ---- | ------------------------ | ------------------------------------------- |
| 1×   | `Defaultholder`          | [Sample Assembly](#Sample%20Assembly)       |
| 2×   | `Rodholder`              | [Sample Assembly](#Sample%20Assembly)       |
| 1×   | `Sample-Stage`           | [Sample Assembly](#Sample%20Assembly)       |
| 1×   | `Kuvettecase_Top`        | [Sample Assembly](#Sample%20Assembly)       |
| 1×   | `Kuvettecase_Bottom`     | [Sample Assembly](#Sample%20Assembly)       |
| 1×   | `Objective-Mount_Insert` | [Sample Assembly](#Sample%20Assembly)       |
| 1x   | `Laser_KM100-Insert`     | [Laser Assembly](#Laser%20Assembly)         |
| 1x   | `Laser_KM100-Mount`      | [Laser Assembly](#Laser%20Assembly)         |
| 3x   | `Defaultholder`          | [Focusing Assembly](#Focusing%20Assembly)   |
| 2x   | `Rodholder`              | [Focusing Assembly](#Focusing%20Assembly)   |
| (1x) | `SMA905_Insert`          | [Focusing Assembly](#Focusing%20Assembly)   |
| 1x   | `Dichroic_KM100-Mount`   | [Dichroic Assembly](#Dichroic%20Assembly)   |
| 1x   | `Baseplate_Small`        | [Baseplate Mounting](#Baseplate%20Mounting) |

### Sourced parts

| Qty. | Name                                       | Notes                                                                                                                                                                                 | Used for                                  |
| ---- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| 1×   | Cuvette                                    | Standard spectroscopic cuvette matching the dimensions of `Kuvettecase_Bottom` and `Kuvettecase_Top`.                                                                                 | [Sample Assembly](#Sample%20Assembly)     |
| 1×   | Microscope objective (20×, inf.-corrected) | See [Edmund Optics – Understanding Microscopes and Objectives](https://www.edmundoptics.com/knowledge-center/application-notes/microscopy/understanding-microscopes-and-objectives/). | [Sample Assembly](#Sample%20Assembly)     |
| 2×   | Rod (⌀ 6 mm, 100 mm)                       | Smooth metal rods that fit the rod openings in the printed parts.                                                                                                                     | [Sample Assembly](#Sample%20Assembly)     |
| 2×   | M3 screw + nut                             | For clamping the microscope objective in its holder.                                                                                                                                  | [Sample Assembly](#Sample%20Assembly)     |
| 1×   | Laser (⌀ 18 mm)                            | Cylindrical laser module, 18 mm body.                                                                                                                                                 | [Laser Assembly](#Laser%20Assembly)       |
| 1×   | Thorlabs KM100                             | Kinematic mirror mount.                                                                                                                                                               | [Laser Assembly](#Laser%20Assembly)       |
| 2–3× | M4 heat-set insert                         | For mounting the KM100 to the base.                                                                                                                                                   | [Laser Assembly](#Laser%20Assembly)       |
| 1×   | M3 heat-set insert                         | For clamping the laser in the insert.                                                                                                                                                 | [Laser Assembly](#Laser%20Assembly)       |
| 1×   | Longpass filter (550 nm)                   | Thorlabs FELH0550                                                                                                                                                                     | [Focusing Assembly](#Focusing%20Assembly) |
| 1×   | Focusing lens                              | Diameter must match the corresponding printed holder.                                                                                                                                 | [Focusing Assembly](#Focusing%20Assembly) |
| 2×   | Rod (⌀ 6 mm, 100 mm)                       | Same rod type and diameter as used in the sample stage.                                                                                                                               | [Focusing Assembly](#Focusing%20Assembly) |
| 6×   | M3 heat-set insert                         | For clamping the optical elements in the holders.                                                                                                                                     | [Focusing Assembly](#Focusing%20Assembly) |
| 6×   | M3 screws                                  | For clamping the optical elements in the holders.                                                                                                                                     | [Focusing Assembly](#Focusing%20Assembly) |
| 1×   | Thorlabs KM100                             | Kinematic mirror mount.                                                                                                                                                               | [Dichroic Assembly](#Dichroic%20Assembly) |
| 1×   | Dichroic mirror (550 nm)                   | Thorlabs DMLP550 (or similar).                                                                                                                                                        | [Dichroic Assembly](#Dichroic%20Assembly) |
| 1×   | M4 heat-set insert                         | For the central KM100 mounting screw.                                                                                                                                                 | [Dichroic Assembly](#Dichroic%20Assembly) |

---

## Sub-assemblies (basic)

| ![Sample assembly overview](../../assets/images_picked/Raman-Optical-Assembly/Sample-Basic-Assembly-1080px_Screenshot_PNG.png) | ![Laser assembly overview](../../assets/images_picked/Raman-Optical-Assembly/Laser-Basic-Assembly-1080px_Screenshot_PNG.png) |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| [**Sample Assembly**](#sample-assembly)<br/><br/>Holds the cuvette and microscope objective on two guide rods.                   | [**Laser Assembly**](#laser-assembly)<br/><br/>Mounts the excitation laser in a Thorlabs KM100 kinematic mirror mount.          |
| ![Focusing assembly overview](../../assets/images_picked/Raman-Optical-Assembly/Focusing-Basic-Assembly-1080px_Screenshot_PNG.png) | ![Dichroic assembly overview](../../assets/images_picked/Raman-Optical-Assembly/Dichroic-Basic-Assembly-1080px_Screenshot_PNG.png) |
| [**Focusing Assembly**](#focusing-assembly)<br/><br/>Filters and focuses the collected signal light towards the fibre / spectrometer input. | [**Dichroic Assembly**](#dichroic-assembly)<br/><br/>Holds the dichroic mirror that separates laser light from Raman signal. |

---

### Sample Assembly

![Exploded view of the sample assembly](../../assets/images_picked/Raman-Optical-Assembly/Sample_Exploded-Drawing_Annotated-Shaded_PNG.png)

The sample assembly positions the cuvette in front of the microscope objective on a pair of guide rods. Before printing and assembling the parts, make sure that your sourced components (cuvette, rods, objective) match the dimensions of the printed holders.

#### Part list

**Printed parts**

| Qty | Part name (.stl)       | Print preview                                                                                                                                |
| --- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| 1×  | Defaultholder          | ![Print orientation of Defaultholder](../../assets/images_print-orientation/Print-Orientation_Defaultholder_164px_PNG.png)                   |
| 2×  | Rodholder              | ![Print orientation of Rodholder](../../assets/images_print-orientation/Print-Orientation_Rodholder_164px_PNG.png)                           |
| 1×  | Sample-Stage           | ![Print orientation of Sample-Stage](../../assets/images_print-orientation/Print-Orientation_Sample-Stage_164px_PNG.png)                     |
| 1×  | Kuvettecase_Top        | ![Print orientation of Kuvettecase_Top](../../assets/images_print-orientation/Print-Orientation_Kuvettecase_Top_164px_PNG.png)               |
| 1×  | Kuvettecase_Bottom     | ![Print orientation of Kuvettecase_Bottom](../../assets/images_print-orientation/Print-Orientation_Kuvettecase_Bottom_164px_PNG.png)         |
| 1×  | Objective-Mount_Insert | ![Print orientation of Objective-Mount_Insert](../../assets/images_print-orientation/Print-Orientation_Objective-Mount_Insert_164px_PNG.png) |

**Sourced parts**

| Qty | Sourced part                               | Notes / essential traits                                                                                                                                                              |
| --- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1×  | Cuvette                                    | Standard spectroscopic cuvette matching the dimensions of `Kuvettecase_Bottom` and `Kuvettecase_Top`.                                                                                 |
| 1×  | Microscope objective (20×, inf.-corrected) | See [Edmund Optics – Understanding Microscopes and Objectives](https://www.edmundoptics.com/knowledge-center/application-notes/microscopy/understanding-microscopes-and-objectives/). |
| 2×  | Rod (⌀ 6 mm, 100 mm)                       | Smooth metal rods that fit the rod openings in the printed parts.                                                                                                                     |
| 2×  | M3 screw + nut                             | For clamping the microscope objective in its holder.                                                                                                                                  |

> [!WARNING] Before you print  
> Make sure your sourced parts are compatible with the printed parts:  
> - Are the rods the correct diameter for the rod holders?  
> - Does your cuvette fit into the `Kuvettecase_Bottom` and `Kuvettecase_Top`?  
> - Does your microscope objective fit into the `Objective-Mount_Insert`?

> [!TIP] Quick compatibility checklist  
> - Cuvette → `Kuvettecase_Bottom` / `Kuvettecase_Top` → `Sample-Stage`  
> - Microscope objective → `Objective-Mount_Insert` → `Defaultholder`  
> - Rods → `Rodholder` → `Sample-Stage` → `Objective-Mount_Insert` → `Defaultholder`

Once you have confirmed that your parts match, you can print the components and validate their fit using the steps below.

---

#### Step 1 – Check rod fit

**Affected parts**

- `Defaultholder`  
- `Rodholder` (2×)  
- `Sample-Stage`  
- `Objective-Mount_Insert`  

To ensure the printed parts slide smoothly but without play on the rods, test-fit a rod through each opening in the parts listed above.

![Checking rod fit in the sample assembly](../../assets/images_picked/Raman-Optical-Assembly/Step-Graphics/Step_Sample_Rod-Fit_1_JPG.jpg)

- The rod should pass through with a noticeable but reasonable amount of force. A snug fit minimises wobble and keeps the optical axis stable.  
- If the rod does not fit at all, lightly sand the edges of the holes and try again.  
- If sanding is not enough, slightly increase the hole compensation (or scale the holes) in your slicer settings and re-print the affected parts.

> [!WARNING] When sanding printed parts  
> Fine plastic dust can be harmful if inhaled. Work in a well-ventilated area, wear a dust mask, and wipe the parts with a damp cloth after sanding to remove any remaining dust.

---

#### Step 2 – Install the microscope objective

1. Slide the `Objective-Mount_Insert` into the `Defaultholder` and confirm a smooth, wobble-free fit.  
2. Insert your microscope objective into the `Objective-Mount_Insert`.  
3. Insert two M3 screws and two nuts into the clamp mechanism on the side of the mount, as shown in the illustration.

![Installing the microscope objective in the holder](../../assets/images_picked/Raman-Optical-Assembly/Step-Graphics/Step_Sample_Objective-Holder_2_JPG.jpg)

4. Make sure the objective sits straight and level in the mount.  
5. Gently tighten both M3 screws until the objective is held firmly.  
6. Check from the side that the objective remains aligned parallel to the rods (its optical axis should be parallel to the rod direction).

![Checking the axial alignment of the microscope objective](../../assets/images_picked/Raman-Optical-Assembly/Step-Graphics/Step_Sample_Objective-Axis_3_JPG.jpg)

> [!WARNING] Do not overtighten  
> Tightening the screws too much can deform the printed part or the objective barrel. Tighten only until the objective no longer moves if you tap it lightly.

---

#### Step 3 – Check the cuvette holder

1. Place your cuvette into the `Kuvettecase_Bottom`. Confirm that the contents of the cuvette are visible through the circular opening in the bottom part.

![Checking cuvette fit in the bottom holder](../../assets/images_picked/Raman-Optical-Assembly/Step-Graphics/Step_Sample_Kuvette_4_JPG.jpg)

2. Slide the `Kuvettecase_Top` over the `Kuvettecase_Bottom` with the cuvette inside. The top should sit tightly and close with some friction.  
3. If the `Kuvettecase_Top` is too tight, lightly sand the inside surfaces. Afterwards, wipe off dust with a damp cloth.  
4. If it still does not fit, slightly scale the `Kuvettecase_Top` in your slicer (for example, to 101 % in X/Y/Z) and re-print.  
5. The cover is optional but recommended to reduce spills and minimise stray light entering from above.

---

#### Step 4 – Assemble the sample sub-assembly

1. Place both `Rodholder` parts upright on your workspace and push both rods through the first `Rodholder`.  
2. Slide the `Defaultholder` (with mounted objective and insert) and then the `Sample-Stage` onto both rods, as shown in the graphic.

![Assembling the sample sub-assembly](../../assets/images_picked/Raman-Optical-Assembly/Step-Graphics/Step_Sample_Assembling_5_JPG.jpg)

3. Push the second `Rodholder` onto the rods to lock the parts in place.  
4. Place the `Kuvettecase_Bottom` with the cuvette on the `Sample-Stage` so that the opening faces the microscope objective. It should sit loosely but stably on the stage.

![Sample sub-assembly – assembled drawing](../../assets/images_picked/Raman-Optical-Assembly/Sample_Assembled_Drawing_512px_PNG.png)

---

### Laser Assembly

![Exploded view of the laser assembly](../../assets/images_picked/Raman-Optical-Assembly/Laser_Exploded-Drawing_Annotated-Shaded_PNG.png)

The laser assembly holds a cylindrical laser module in a Thorlabs KM100 kinematic mount using a printed adapter and heat-set threaded inserts.

#### Part list

**Printed parts**

| Qty | Part name (.stl)   | Print preview                                                                                                                        |
| --- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| 1×  | Laser_KM100-Insert | ![Print orientation of Laser_KM100-Insert](../../assets/images_print-orientation/Print-Orientation_Laser_KM100-Insert_164px_PNG.png) |
| 1×  | Laser_KM100-Mount  | ![Print orientation of Laser_KM100-Mount](../../assets/images_print-orientation/Print-Orientation_Laser_KM100-Mount_164px_PNG.png)   |

**Sourced parts**

| Qty  | Sourced part       | Notes                                 |
| ---- | ------------------ | ------------------------------------- |
| 1×   | Laser (⌀ 18 mm)    | Cylindrical laser module, 18 mm body. |
| 1×   | Thorlabs KM100     | Kinematic mirror mount.               |
| 2–3× | M4 heat-set insert | For mounting the KM100 to the base.   |
| 1×   | M3 heat-set insert | For clamping the laser in the insert. |

> [!WARNING] Before you print  
> Check that the laser body diameter matches the `Laser_KM100-Insert`.

---

#### Step 1 – Prepare the printed KM100 mount (heat-set inserts)

1. Insert an M4 brass heat-set insert (slim side first) into the centre opening on the bottom of the `Laser_KM100-Mount`.  
2. Using a hot soldering iron with a flat tip, gently press on the insert until the surrounding plastic softens and the insert sinks into the part.  
3. Stop when the insert is slightly below the plastic surface. The KM100 will sit on this face, so it should remain flat.

![Melting heat-set inserts into the KM100 base mount](../../assets/images_picked/Raman-Optical-Assembly/Step-Graphics/Step_Laser_Base_Heatmelt_6_JPG.jpg)

4. Repeat the process for the side holes in the mount where additional M4 inserts are required (see illustration).  
5. Allow the part to cool completely before mounting any hardware.

> [!TIP] Tools for heat-set inserts  
> A temperature-controlled soldering iron with a flat tip works well. Dedicated heat-set insert tips are inexpensive and make this step easier.

---

#### Step 2 – Prepare the laser insert (`Laser_KM100-Insert`)

1. Heat-set the M3 insert into the small side hole of the `Laser_KM100-Insert`.  
2. Make sure the insert does not protrude into the inner bore where the laser will sit. A slight protrusion on the outside is fine.

![Melting the M3 insert into the laser adapter](../../assets/images_picked/Raman-Optical-Assembly/Step-Graphics/Step_Laser_Insert_Heatmelt_7_JPG.jpg)

---

#### Step 3 – Mount the KM100 in the printed base

1. Place the KM100 on top of the `Laser_KM100-Mount` so that the central hole in the KM100 aligns with the centre M4 insert.  
   - The rotation of the KM100 is not critical at this point; the printed mount supports multiple orientations.  
2. Use one of the supplied M4 screws to fasten the KM100 to the mount. Tighten only until the mount no longer moves freely.  
3. Use a second screw in one of the side slots if desired to further stabilise the mount.

![Mounting the KM100 on the printed base](../../assets/images_picked/Raman-Optical-Assembly/Step-Graphics/Step_Laser_Base_Mounting_8_JPG.jpg)

---

#### Step 4 – Insert the printed laser adapter

1. Check that the small nylon set screw on the KM100 (perpendicular to the front opening) is loosened so that it does not block the aperture.  
2. From the front of the KM100, push the `Laser_KM100-Insert` into the circular opening. It should seat firmly but without excessive force.  
3. Apply light pressure with both thumbs until the front face of the printed insert is flush with the inner reference ring of the KM100.  
4. Lightly tighten the nylon set screw on the KM100 to hold the printed insert in place.

---

#### Step 5 – Insert the laser module

1. From the back of the mount, slide the laser module into the `Laser_KM100-Insert` that is now fixed inside the KM100.

![Installing the laser module into the adapter](../../assets/images_picked/Raman-Optical-Assembly/Step-Graphics/Step_Laser_Assembling_9_JPG.jpg)

   - The exact insertion depth is not critical. Ideally, the laser front face is close to flush with the front of the `Laser_KM100-Insert`.  
2. Insert an M3 screw into the M3 heat-set insert in the side of the `Laser_KM100-Insert` and gently tighten it until the laser is held securely.

![Laser assembly – assembled drawing](../../assets/images_picked/Raman-Optical-Assembly/Laser_Assembled_Drawing_512px_PNG.png)

> [!WARNING] Avoid crushing the laser body  
> Do not overtighten the M3 clamping screw. Tighten only until the laser can no longer rotate or slide when you try to move it by hand.

---

### Focusing Assembly

![Exploded view of the focusing assembly](../../assets/images_picked/Raman-Optical-Assembly/Focusing_Exploded-Drawing_Annotated-Shaded_PNG.png)

The focusing assembly combines the longpass filter, focusing lens and (optionally) an SMA905 fibre adapter on a pair of rods. This module filters and focuses the Raman signal into the spectrometer input.

#### Part list

**Printed parts**

| Qty  | Part name (.stl) | Print preview                                                                                                              |
| ---- | ---------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 3×   | Defaultholder    | ![Print orientation of Defaultholder](../../assets/images_print-orientation/Print-Orientation_Defaultholder_164px_PNG.png) |
| 2×   | Rodholder        | ![Print orientation of Rodholder](../../assets/images_print-orientation/Print-Orientation_Rodholder_164px_PNG.png)         |
| (1×) | SMA905_Insert    | ![Print orientation of SMA905_Insert](../../assets/images_print-orientation/Print-Orientation_SMA905_Insert_164px_PNG.png) |

**Sourced parts**

| Qty | Sourced part             | Notes                                                   |
| --- | ------------------------ | ------------------------------------------------------- |
| 1×  | Longpass filter (550 nm) | Thorlabs FELH0550                                       |
| 1×  | Focusing lens            | Diameter must match the corresponding printed holder.   |
| 2×  | Rod (⌀ 6 mm, 100 mm)     | Same rod type and diameter as used in the sample stage. |
| 6×  | M3 heat-set insert       | For clamping the optical elements in the holders.       |
| 6×  | M3 screws                | For clamping the optical elements in the holders.       |

> [!WARNING] Before you print  
> Confirm that the longpass filter and focusing lens diameters match the openings in the printed `Defaultholder` parts.

---

#### Step 1 – Check rod fit (again)

The rod fit procedure is identical to **[Step 1 – Check rod fit](#step1--check-rod-fit)** in the sample assembly:

- Test-fit the rods through all `Rodholder` parts and through the bores in each `Defaultholder` that will sit on the rods.  
- Adjust with light sanding or slicer hole compensation if necessary.

---

#### Step 2 – Prepare the holders (heat-set inserts)

1. Identify the clamping points in the `Defaultholder` parts where screws will press on the longpass filter, focusing lens and SMA905 insert.  
2. Heat-set M3 inserts in all corresponding holes so that the inserts sit slightly below the plastic surface.  
3. Let the parts cool fully before inserting any optics.

> [!WARNING] Handle optics only after plastic has cooled  
> Hot plastic can warp or damage optical coatings. Always complete all heating/soldering steps before inserting filters or lenses.

---

#### Step 3 – Assemble the focusing module

1. Insert both rods into the first `Rodholder`.  
2. Slide the three `Defaultholder` blocks onto the rods in the following order (from the sample side towards the spectrometer side):  
   - `Defaultholder` with the `SMA905_Insert` and connected SMA905 fibre (if used).  
   - `Defaultholder` holding the focusing lens.  
   - `Defaultholder` holding the longpass filter.  
3. Push the rods through the second `Rodholder` to lock the sequence of holders in place.

![Focusing assembly – assembled drawing](../../assets/images_picked/Raman-Optical-Assembly/Focusing_Assembled_Drawing_512px_PNG.png)

> [!TIP] Orientation of optics  
> Make sure you keep track of which side of the longpass filter and focusing lens should face the incoming light, according to their datasheets. If in doubt, mark the correct side with a small sticker on the edge before mounting.

---

### Dichroic Assembly

![Exploded view of the dichroic assembly](../../assets/images_picked/Raman-Optical-Assembly/Dichroic_Exploded-Drawing_Annotated-Shaded_PNG.png)

The dichroic assembly mounts a Thorlabs dichroic mirror in a KM100 kinematic mount, held by a printed base that will later sit on the main baseplate. The dichroic separates the excitation laser from the Raman signal.

#### Part list

**Printed parts**

| Qty | Part name (.stl)     | Print preview                                                                                                                            |
| --- | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 1×  | Dichroic_KM100-Mount | ![Print orientation of Dichroic_KM100-Mount](../../assets/images_print-orientation/Print-Orientation_Dichroic_KM100-Mount_164px_PNG.png) |

**Sourced parts**

| Qty | Sourced part             | Notes                                 |
| --- | ------------------------ | ------------------------------------- |
| 1×  | Thorlabs KM100           | Kinematic mirror mount.               |
| 1×  | Dichroic mirror (550 nm) | Thorlabs DMLP550 (or similar).        |
| 1×  | M4 heat-set insert       | For the central KM100 mounting screw. |

---

#### Step 1 – Prepare the printed KM100 mount

1. Insert the M4 heat-set insert into the central hole of the `Dichroic_KM100-Mount`.  
2. Using a hot soldering iron, press the insert straight into the opening until it sits slightly below the plastic surface.  
3. Position the KM100 on the `Dichroic_KM100-Mount` so that the bottom screw hole aligns with the M4 insert.  
4. Use one of the provided M4 screws to fasten the KM100 to the mount until it no longer moves freely, but can still be rotated with gentle force.

> [!NOTE] Rotation during alignment  
> Later, on the baseplate, the KM100 will be rotated to 45° with respect to the incoming laser beam. You will slightly loosen this screw again to set that angle.

---

#### Step 2 – Install the dichroic mirror

> [!WARNING] Handle optics carefully  
> Work in a clean area and wear powder-free nitrile gloves. Avoid touching the coated surfaces and never wipe them with dry cloths.

![Spectral performance of the Thorlabs DMLP550 dichroic mirror at 45° AOI](../../assets/images_picked/Raman-Optical-Assembly/Thorlabs_Dichroic-DMLP550_Performance_45-AOI_350px_PNG.png)  
_Source: Thorlabs – “Longpass Dichroic Mirrors/Beamsplitters”_

1. Review the Thorlabs handling guide for high-performance optics:  
   [Thorlabs – Optics Handling and Care](https://www.thorlabs.com/newgrouppage9.cfm?objectgroup_id=9025).  
2. The dichroic mirror is directional: one side carries the dichroic coating (reflecting the laser, transmitting the Raman signal), the other side carries an anti-reflection (AR) coating.  

![Orientation of the dichroic coating on the DMLP550](../../assets/images_picked/Raman-Optical-Assembly/Thorlabs_Dichroic-Orientation_PNG.png)  
_Source: Thorlabs – “Longpass Dichroic Mirrors/Beamsplitters”_

3. On the Thorlabs DMLP550, the **dichroic side is indicated by a small engraved arrow pointing towards the coated surface**. This arrow is etched on the outer edge and can be hard to see in dim light.  
4. With clean powder-free nitrile gloves, carefully hold the dichroic by its outer edge and locate the engraved arrow.  
5. Insert the dichroic mirror into the KM100 so that:  
   - The dichroic (arrow-marked) side faces the incoming laser beam (front side).  
   - The AR-coated side faces towards the KM100 adjustment knobs (back side).  
6. Gently tighten the nylon set screw on the KM100 until the dichroic sits evenly and flush in the mount.

![Dichroic assembly – assembled drawing](../../assets/images_picked/Raman-Optical-Assembly/Dichroic_Assembled_Drawing_512px_PNG.png)

---

## Baseplate Mounting

![Basic assembly mounted on the baseplate](../../assets/images_picked/Raman-Optical-Assembly/Basic-Assembly_Assembled_1400px_PDFto_PNG.png)

In this final step you mount all sub-assemblies onto the baseplate to form the complete basic Raman optical assembly.

#### Part list

**Printed parts**

| Qty | Part name (.stl) | Dimensions       | Print preview                                                                                                                  |
| --- | ---------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| 1×  | Baseplate_Small  | 250 × 140 × 7 mm | ![Print orientation of Baseplate_Small](../../assets/images_print-orientation/Print-Orientation_Baseplate_Small_164px_PNG.png) |

**Sourced parts**

| Qty | Part                                      | Notes                                          |
| --- | ----------------------------------------- | ---------------------------------------------- |
| 1×  | [Sample Assembly](#Sample%20Assembly)     |                                                |
| 1×  | [Laser Assembly](#Laser%20Assembly)       |                                                |
| 1×  | [Focusing Assembly](#Focusing%20Assembly) |                                                |
| 1×  | [Dichroic Assembly](#Dichroic%20Assembly) |                                                |
| 14× | M4 screw, 16 mm                           | For fastening sub-assemblies to the baseplate. |
| 6×  | M4 nut                                    | For additional clamping where required.        |

---

#### Step 1 – Mount the sub-assemblies on the baseplate

![Assembly steps for mounting all sub-assemblies](../../assets/images_picked/Raman-Optical-Assembly/Step-Graphics/Step_Baseplate_Assembly-Steps_10_JPG.jpg)

1. Mount the [Sample Assembly](#sample-assembly) using four M4 screws from the bottom of the baseplate.  
2. Mount the [Laser Assembly](#laser-assembly) using four M4 screws from the bottom and four M4 nuts from above to tighten.  
3. Mount the [Focusing Assembly](#focusing-assembly) using four M4 screws from the bottom.  
4. Mount the [Dichroic Assembly](#dichroic-assembly) using two (or four) M4 screws from the bottom and the corresponding M4 nuts from above.

> [!NOTE] Fine-tune the dichroic assembly  
> The dichroic assembly as a whole is designed to move in X/Y direction to allow for positional adjustments. You may want to re-position the assembly within the bounds of its mount later on, so do not overtighten screws and nuts at this stage.

![Sub-assemblies mounted on the baseplate – line art](../../assets/images_picked/Raman-Optical-Assembly/Step-Graphics/Step_Baseplate_Final_11_JPG.jpg)

---

## Continue reading

- [Spectrometer Unit](Spectrometer%20Unit.md)
- [Spectrum Studio Cheatsheet](Spectrum%20Studio%20Cheatsheet.md)
- [Rhodamine B](Rhodamine%20B.md)
- [Build the Linear Translation Stage](Linear%20Translation%20Stage.md)  
- [Build the Overpressure Glovebox](Overpressure%20Glove%20Box.md)  
- [Build the Full Assembly](Full%20Raman%20Optical%20Assembly.md)  

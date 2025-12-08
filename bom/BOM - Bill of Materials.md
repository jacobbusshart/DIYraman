# Parts and Materials

---

## [Basic Raman Optical Assembly](Basic%20Raman%20Optical%20Assembly.md)

### Sourced parts

| Qty  | Name                     | Model / Spec                                                                                                                                                                                   | Supplier                              | Notes                                                                                                                                                                    | Used in                                                                          | Cost (total) |
| ---- | ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------- | ------------ |
| 1-2x | Quartz Cuvette           | Any                                                                                                                                                                                            | eBay Marketplace                      | 1x is sufficient, but two cuvettes facilitate calibration (sample cuvette & fluorescent cuvette), matching the dimensions of `Kuvettecase_Bottom` and `Kuvettecase_Top`. | [Sample Assembly](#Sample%20Assembly)                                            | 20€          |
| 1x   | Microscope objective     | Any, Leitz PL Fluotar 20x/0.45 D EPI, oo/0                                                                                                                                                     | eBay Marketplace                      | Any, 20x, inf.- corrected, WD > Cuvette-Thickness (alternative to printed part: [CP42/M](https://www.thorlabs.de/thorproduct.cfm?partnumber=CP42/M))                     | [Sample Assembly](#Sample%20Assembly)                                            | 80€          |
| 4x   | Guide Rod ⌀ 6 mm, 100 mm | Any, [ER Assembly Rods for 30 mm Cage Systems](https://www.thorlabs.de/newgrouppage9.cfm?objectgroup_ID=4125) i.e. [ER4](https://www.thorlabs.de/thorproduct.cfm?partnumber=ER4) (4" ~ 100 mm) | Thorlabs / eBay Marketplace / various | Ideally for optical applications (tight tolerances)                                                                                                                      | [Sample Assembly](#Sample%20Assembly), [Focusing Assembly](#Focusing%20Assembly) | -            |
| 1x   | Laser 532nm              | Any, 532 nm DPSS, 30mW - 70mW, (⌀ 18 mm)                                                                                                                                                       | Aliexpress                            | Cylindrical laser module, 18 mm body.                                                                                                                                    | [Laser Assembly](#Laser%20Assembly)                                              | 25€          |
| 2x   | Kinematic Mount          | Thorlabs KM100                                                                                                                                                                                 | Thorlabs                              | Kinematic mirror mount.                                                                                                                                                  | [Laser Assembly](#Laser%20Assembly), [Dichroic Assembly](#Dichroic%20Assembly)   | 90€          |
| 1x   | Longpass filter (550 nm) | Thorlabs FELH0550                                                                                                                                                                              | Thorlabs                              |                                                                                                                                                                          | [Focusing Assembly](#Focusing%20Assembly)                                        | 170€         |
| 1x   | Focusing lens            | [Thorlabs AC127-019-A](https://www.thorlabs.de/thorproduct.cfm?partnumber=AC127-019-A) - f = 19 mm, Ø1/2" Achromatic Doublet                                                                   | Thorlabs                              | (mounted in [CP32/M](https://www.thorlabs.com/thorproduct.cfm?partnumber=CP32/M))                                                                                        | [Focusing Assembly](#Focusing%20Assembly)                                        | 60€          |
| 1x   | Dichroic mirror (550 nm) | Thorlabs DMLP550                                                                                                                                                                               | Thorlabs                              |                                                                                                                                                                          | [Dichroic Assembly](#Dichroic%20Assembly)                                        | 230€         |
| 8x   | M3 screw + nut           | Any                                                                                                                                                                                            | -                                     |                                                                                                                                                                          | [Sample Assembly](#Sample%20Assembly), [Focusing Assembly](#Focusing%20Assembly) | -            |
| 4x   | M4 heat-set insert       | Any                                                                                                                                                                                            | -                                     |                                                                                                                                                                          | [Laser Assembly](#Laser%20Assembly), [Dichroic Assembly](#Dichroic%20Assembly)   | -            |
| 7x   | M3 heat-set insert       | Any                                                                                                                                                                                            | -                                     |                                                                                                                                                                          | [Laser Assembly](#Laser%20Assembly), [Focusing Assembly](#Focusing%20Assembly)   | -            |

### Printed parts

| Qty | Part name (.stl)         | Used in                                                                          |
| --- | ------------------------ | -------------------------------------------------------------------------------- |
| 4x  | `Defaultholder`          | [Sample Assembly](#Sample%20Assembly), [Focusing Assembly](#Focusing%20Assembly) |
| 4x  | `Rodholder`              | [Sample Assembly](#Sample%20Assembly), [Focusing Assembly](#Focusing%20Assembly) |
| 1x  | `Sample-Stage`           | [Sample Assembly](#Sample%20Assembly)                                            |
| 1x  | `Kuvettecase_Top`        | [Sample Assembly](#Sample%20Assembly)                                            |
| 1x  | `Kuvettecase_Bottom`     | [Sample Assembly](#Sample%20Assembly)                                            |
| 1x  | `Objective-Mount_Insert` | [Sample Assembly](#Sample%20Assembly)                                            |
| 1x  | `Laser_KM100-Insert`     | [Laser Assembly](#Laser%20Assembly)                                              |
| 1x  | `Laser_KM100-Mount`      | [Laser Assembly](#Laser%20Assembly)                                              |
| 1x  | `SMA905_Insert`          | [Focusing Assembly](#Focusing%20Assembly)                                        |
| 1x  | `Dichroic_KM100-Mount`   | [Dichroic Assembly](#Dichroic%20Assembly)                                        |
| 1x  | `Baseplate_Small`        | [Baseplate Mounting](#Baseplate%20Mounting)                                      |

## Various

| Qty  | Name                  | Model / Spec                                                                    | Supplier                                                             | Notes                                                                                     | Used in                         | Cost (total) |
| ---- | --------------------- | ------------------------------------------------------------------------------- | -------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ------------------------------- | ------------ |
| 1x   | Laser safety glasses  | PROTECT-Laserschutz Terminator, Filter 0277                                     | [PROTECT-Laserschutz](https://protect-laserschutz.de/de/shop/~p1924) | Any laser safety glasses for 532nm (DONT BUY CHEAP CHINESE KNOCK-OFFS HERE!)              | EVERYWHERE                      | 130€         |
| 1x   | 3D-printing filament  | PETG-CF (Black)                                                                 | -                                                                    | -                                                                                         | EVERYWHERE                      | 25€          |
| 1x   | Fluorescent dye       | Rhodamine B (*CAS: 81-88-9*), 5g                                                | eBay                                                                 | Any strong fluorescent material with excitation at around the laser's wavelength (532 nm) | [Rhodamine B](Rhodamine%20B.md) | 15€          |
| 1x   | Bandpass filter 532nm | Edmund Optics #65640                                                            | Edmund Optics                                                        | OPTIONAL FOR NOW (use for cheap laser)                                                    | Final Raman Assembly            | 95€          |
| 2-4x | (Optional) Cage Plate | 30 mm cage plate, https://www.thorlabs.de/newgrouppage9.cfm?objectgroup_id=2273 | Any, Thorlabs, Edmund Optics                                         | Offers a thread, unlike the printed *Defaultholder*                                       |                                 |              |


## [Spectrometer Unit](Spectrometer%20Unit.md)

### Sourced parts

| Qty | Name                      | Model / Spec                                     | Supplier                                      | Notes                                                                                | Used in                                     | Cost (total) |
| --- | ------------------------- | ------------------------------------------------ | --------------------------------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------- | ------------ |
| 1x  | Spectrometer unit         | B&W Tek BTC100-2S                                | [eBay](https://www.ebay.com/itm/143989529085) | Or any other spectrometer - ideally with SMA905 input, if you use fiber.             | [Spectrometer Unit](Spectrometer%20Unit.md) | 200€         |
| 1x  | Fiber optic cable, 200 μm | Any, SMA905-SMA905 1m VIS-IR 200um               | Any, Aliexpress                               | -                                                                                    | [Spectrometer Unit](Spectrometer%20Unit.md) | 50€          |
| 1x  | Data cable                | RS-232 to USB                                    | Amazon                                        | Choose a chipset compatible with your OS (many FTDI / Prolific chips work reliably). | [Spectrometer Unit](Spectrometer%20Unit.md) | 15€          |
| 1x  | Power supply              | 5V, ~3A, DC barrel jack                          | Amazon                                        |                                                                                      | [Spectrometer Unit](Spectrometer%20Unit.md) | 15€          |
| 1x  | Calibration lamp          | Dedicated calibration / CFL / mercury-vapor lamp | Any, eBay Marketplace                         | Needs several sharp lines near ~550 nm for wavelength calibration.                   | [Spectrometer Unit](Spectrometer%20Unit.md) | 25€          |

### Printed parts

| Qty | Part name (.stl)           | Used in                                     |
| --- | -------------------------- | ------------------------------------------- |
| 1x  | `Spectrometer-Case_Bottom` | [Spectrometer Unit](Spectrometer%20Unit.md) |
| 1x  | `Spectrometer-Case_Top`    | [Spectrometer Unit](Spectrometer%20Unit.md) |
| 1x  | `Spectrometer_Screw-Cover` | [Spectrometer Unit](Spectrometer%20Unit.md) |


## [Overpressure Glove Box](Overpressure%20Glove%20Box.md)

### Sourced parts

| Qty                  | Name           | Model / Spec                                         | Supplier                                                                             | Notes                                                                                      | Used in                                                 | Cost (total) |
| -------------------- | -------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------- | ------------ |
| 1x                   | Storage box    | IKEA SAMLA, transparent, <br>57×39×42 cm             | [IKEA](https://www.ikea.com/de/en/p/samla-box-with-lid-transparent-s99440774/)       | Any similar box works, separate lid that forms tight seal is ideal.                        | [Overpressure Glove Box](Overpressure%20Glove%20Box.md) | 12€          |
| 1x                   | HEPA filter    | IKEA UPPATVIND                                       | [IKEA](https://www.ikea.com/de/en/p/uppatvind-filter-for-particle-removal-90551498/) | Any HEPA / fine dust filter of similar size works. Higher filtration = more pressure drop. | [Overpressure Glove Box](Overpressure%20Glove%20Box.md) | 5€           |
| 2x                   | PC fan         | Any, 120 mm PC fan                                   | -                                                                                    | 12V DC fans. Check current draw and airflow rating.                                        | [Overpressure Glove Box](Overpressure%20Glove%20Box.md) | 10€          |
| 2x                   | Gloves         | Any, long‑sleeved chemical or dishwashing gloves     | -                                                                                    | Choose gloves long enough to reach all areas inside the box.                               | [Overpressure Glove Box](Overpressure%20Glove%20Box.md) | 2€           |
| 14x                  | M4 screw + nut | Hex socket head cap screw                            | Any                                                                                  | Mixture of lengths below.                                                                  | [Overpressure Glove Box](Overpressure%20Glove%20Box.md) | -            |
| 4x<br>4x<br>2x<br>4x |                | M4 × 12 mm<br>M4 × 16 mm<br>M4 × 20 mm<br>M4 × 65 mm |                                                                                      |                                                                                            |                                                         |              |

### Printed parts

| Qty | Part name (.stl)                  | Used in                                                                          |
| --- | --------------------------------- | -------------------------------------------------------------------------------- |
| 1x  | `Fan_Connector‑Bracket`           | [Overpressure Glove Box](Overpressure%20Glove%20Box.md) Fan / filter assembly    |
| 1x  | `Fan_Baseplate`                   | [Overpressure Glove Box](Overpressure%20Glove%20Box.md) Fan / filter assembly    |
| 2x  | `Filter_Holder‑Clamp`             | [Overpressure Glove Box](Overpressure%20Glove%20Box.md) Fan / filter assembly    |
| 4x  | `Fan_Outer‑Bracket`               | [Overpressure Glove Box](Overpressure%20Glove%20Box.md) Fan / filter assembly    |
| 2x  | `Glove‑Insert_Inner`              | [Overpressure Glove Box](Overpressure%20Glove%20Box.md) Glove ports              |
| 2x  | `Glove‑Insert_Outer‑Ring`         | [Overpressure Glove Box](Overpressure%20Glove%20Box.md) Glove ports              |
| 1x  | `Large‑Insert_Inner`              | [Overpressure Glove Box](Overpressure%20Glove%20Box.md) Large service port       |
| 1x  | `Large‑Insert_Threaded‑Cover`     | [Overpressure Glove Box](Overpressure%20Glove%20Box.md) Large service port       |
| 1x  | `Large‑Insert_Outer‑Cover‑Open`   | [Overpressure Glove Box](Overpressure%20Glove%20Box.md) Large service port       |
| 1x  | `Large‑Insert_Outer‑Cover‑Closed` | [Overpressure Glove Box](Overpressure%20Glove%20Box.md) Large service port       |
| 1x  | `Cable‑Insert_Inner`              | [Overpressure Glove Box](Overpressure%20Glove%20Box.md) Cable / feedthrough port |
| 1x  | `Cable‑Insert_Nut`                | [Overpressure Glove Box](Overpressure%20Glove%20Box.md) Cable / feedthrough port |
| 1x  | `Cable‑Insert_Cover`              | [Overpressure Glove Box](Overpressure%20Glove%20Box.md) Cable / feedthrough port |


## [Linear Translation Stage](Linear%20Translation%20Stage.md)

### Sourced parts

| Qty | Name                      | Model / Spec                                                                                                  | Supplier                              | Notes                                               | Used in                                                     | Cost (total) |
| --- | ------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------- | --------------------------------------------------- | ----------------------------------------------------------- | ------------ |
| 1x  | Micrometer screw          | ~10-15 mm travel                                                                                              | Aliexpress                            | With mounting nut/collar                            | [Linear Translation Stage](Linear%20Translation%20Stage.md) | 10€          |
| 2x  | Guide Rod ⌀ 6 mm, 55 mm   | Any, [ER Assembly Rods for 30 mm Cage Systems](https://www.thorlabs.de/newgrouppage9.cfm?objectgroup_ID=4125) | Thorlabs / eBay Marketplace / various | Ideally for optical applications (tight tolerances) | [Linear Translation Stage](Linear%20Translation%20Stage.md) | -            |
| 2x  | Compression spring        | ⌀ ≥ 6 mm                                                                                                      | Any                                   | Stiffness chosen for light pre-load                 | [Linear Translation Stage](Linear%20Translation%20Stage.md) | -            |
| 4x  | M3.5 screw + washer + nut | ~12 mm length                                                                                                 | Any                                   |                                                     | [Linear Translation Stage](Linear%20Translation%20Stage.md) | -            |

### Printed parts

| Qty | Part name (.stl)         | Used in                                                     |
| --- | ------------------------ | ----------------------------------------------------------- |
| 1x  | `LinearStage_Base`       | [Linear Translation Stage](Linear%20Translation%20Stage.md) |
| 1x  | `LinearStage_Stage`      | [Linear Translation Stage](Linear%20Translation%20Stage.md) |
| 1x  | `LinearStage_Frontplate` | [Linear Translation Stage](Linear%20Translation%20Stage.md) |
| 1x  | `LinearStage_L-Bracket`  | [Linear Translation Stage](Linear%20Translation%20Stage.md) |


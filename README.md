# DIYraman – Open Hardware Raman Spectrometer

![License: CERN-OHL-S v2](https://img.shields.io/badge/Hardware_License-CERN--OHL--S_v2-blue) ![License: CC BY-SA 4.0](https://img.shields.io/badge/Docs_License-CC_BY--SA_4.0-green) ![License: MIT](https://img.shields.io/badge/Software_License-MIT-yellow)

**Build, understand, and modify your own Raman spectrometer.**
*A modular platform aimed at hobbyists, educators, and low-resource labs.*

![Full Assembly in Overpressure Glove Box](assets/images_pictures/Overview-Video-Pic_1_1400px_JPG.jpg)

---

## 🔭 Project Overview

**DIYraman** aims to make Raman spectroscopy **replicable, affordable, and fully documented**.

Raman spectroscopy allows for the identification of substances by analyzing how light interacts with molecular vibrations. Historically, this equipment costs tens of thousands of dollars. This project provides the files and instructions to bring that capability to the workbench of motivated makers and teachers.

**Key Applications**
* **Identify Substances:** Broad identification of plastics, solvents, and minerals.
* **Qualitative Screening:** Exploratory analysis of pharmaceuticals (e.g., pill composition).
* **Teach Optics:** A hands-on platform for learning spectroscopy and photonics.

> 💡 This README is a *project overview*. Detailed build instructions can be found in `docs/` and the dedicated pages: 
> [Basic Assembly](docs/Basic%20Raman%20Optical%20Assembly.md) | [Glove Box](docs/Overpressure%20Glove%20Box.md) | [Spectrometer Unit](docs/Spectrometer%20Unit.md) | [Rhodamine B](docs/Rhodamine%20B.md) | [SpectrumStudio Cheatsheet](docs/Spectrum%20Studio%20Cheatsheet.md) | [Linear Stage](docs/Linear%20Translation%20Stage.md) | [Full Assembly](docs/Full%20Raman%20Optical%20Assembly.md)

---

## ⚙️ The Hardware Architecture

To balance cost with performance, DIYraman uses a "hybrid" approach: Professional filtering optics combined with repurposed spectroscopy hardware and 3D-printed mechanics.

![Optical Path Overview](assets/images_infographic/Optical-Path-Overview_PNG.png)

### The Stack
* **Spectrometer:** Surplus BTC100-2S unit (available on [eBay](https://www.ebay.com/itm/143989529085)).
* **Excitation:** Cost-effective 532nm DPSS laser pointer.
* **Mechanics:** Fully 3D-printable modular stages and enclosures.
* **Critical Optics:** High-quality dichroic mirrors and filters (Thorlabs/Edmund Optics) are used to ensure signal integrity.

**Bill of Materials**
A detailed cost breakdown and parts list is available in the [**Bill of Materials (BOM)**](/bom/BOM%20(Bill%20of%20Materials).md).

---

## 🚀 Progress & Build Guide

The following build path is recommended for a complete and coherent build-experience. The table reflects the current development status of the project's modules.

| Step  | Module                                                           | Description                                                                  | Status        |
| :---- | :--------------------------------------------------------------- | :--------------------------------------------------------------------------- | :------------ |
| **1** | [**Spectrometer Unit**](docs/Spectrometer%20Unit.md)             | Setup and testing of the B&W Tek spectrometer.                               | 🟡 Usable     |
| **2** | [**Glove Box**](docs/Overpressure%20Glove%20Box.md)              | DIY overpressure glovebox construction to keep optics dust-free.             | ✅ Ready       |
| **3** | [**Basic Assembly**](docs/Basic%20Raman%20Optical%20Assembly.md) | Essential optical assembly to acquire first Raman spectra.                   | ✅ Ready       |
| **4** | [**Linear Stage**](docs/Linear%20Translation%20Stage.md)         | DIY build of a low-cost linear translation stage for fine focus adjustments. | 🟡 WiP        |
| **5** | [**Full Assembly**](docs/Full%20Raman%20Optical%20Assembly.md)   | Motorization and integration of Linear Stage.                                | 🟠 Incomplete |
| **6** | **Software / GUI**                                               | Custom acquisition and visualization software.                               | 🔴 Planned    |


> **Status Key:** ✅ = Verified & Documented | 🟡 = Usable, Docs in Progress | 🟠 = Draft / Unstable | 🔴 = Planned / Unpublished

---

## 📊 Technical Capabilities

![](assets/images_pictures/Overview-Video-Pic_3_1400px_JPG.jpg)

| Feature | Specification |
| :--- | :--- |
| **Spectral Range** | Stokes region > ~600 cm⁻¹ |
| **Sample Type** | Solids & Liquids (Cuvette holder) |
| **Resolution** | Dependent on B&W Tek module variant |
| **Safety** | Enclosed optical path (Laser Class 3B precautions required during alignment) |

> 🧪 **Drug / counterfeit screening**  
> The system can be used for *exploratory, educational* screening of unknowns (e.g. counterfeit pills) but **must not** be treated as a validated forensic tool. **Always cross-check with certified methods!**

---

## 📂 Repository Structure

```text
├── assets/                 # Images, infographics, and media
├── bom/                    # Bill of Materials lists
├── docs/                   # Detailed build instructions
├── parts/                  # STL and CAD files for 3D printing
│   ├── basic-assembly/
│   ├── glovebox/
│   └── ...
├── results/                # Early example spectra captured
└── software/               # Acquisition software (Coming Soon)
```

---

## 🤝 Contributing

Contributions are welcome from makers, scientists, and coders. Areas for contribution include:

1. **Testing:** Reporting unclear steps or missing files in the documentation.
2. **Design:** Proposing improved mechanical mounts or variants.
3. **Coding:** Assisting with the upcoming GUI/Firmware.
4. **Sharing:** Submitting example spectra.

**Citation** If utilizing DIYRaman for research or teaching, please cite the project:

> **DIYRaman - Open Hardware Raman Spectrometer (GitHub)** 
> _Jacob Busshart, DIYraman.com_

---

## 📜 Licenses

A modular licensing structure is used to ensure maximum freedom for hardware and software usage.

- **Hardware (CAD, Schematics):** [CERN-OHL-S v2](LICENSES/CERN_OHL_S_V2.txt)
- **Documentation (Guides, Images):** [CC BY-SA 4.0](LICENSES/CC-BY-SA-4.0.txt)
- **Software (Firmware, GUI):** [MIT License](LICENSES/MIT.txt)

---

### Acknowledgements

_Built on the shoulders of the open science community._

- [OpenRaman.org](https://www.open-raman.org/) & [ThePulsar.be](https://www.thepulsar.be/article/diy-raman-spectroscopy/)
- [PhysicsOpenLab.org](https://physicsopenlab.org/2022/04/22/backscattering-raman-system/)
- [LaserPointerForums Community](https://laserpointerforums.com/threads/b-w-tech-spectrometer-473-module-setup-mods-info.101467/)


---

*NOTE: Some parts of the written documentation have been formatted or translated using AI.*

![](../../assets/images_pictures/Video-Pic_Setup_3_1400px_JPG.jpg)
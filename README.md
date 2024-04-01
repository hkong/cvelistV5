# CVE List V5

This repository is the official [CVE List](https://www.cve.org/ResourcesSupport/Glossary?activeTerm=glossaryCVEList).  It is a catalog of all [CVE Records](https://www.cve.org/ResourcesSupport/Glossary?activeTerm=glossaryRecord) identified by, or reported to, the [CVE Program](https://www.cve.org/).

This repository hosts files of CVE Records in [CVE Record Format](https://www.cve.org/AllResources/CveServices#cve-json-5) (view the [schema](https://github.com/CVEProject/cve-schema)). They are updated regularly (about every 7 minutes) using the official CVE Services API.  You may search, download, and use the content hosted in this repository, per the [CVE Program Terms of Use](https://www.cve.org/Legal/TermsOfUse).

**Legacy Format Downloads Available for Limited Time**—[Legacy format CVE List downloads](https://www.cve.org/Downloads#legacy-format) that are currently available for download on the CVE.ORG website, which are derived from CVE JSON 4.0, will be [phased out in the first half of 2024](https://medium.com/@cve_program/deprecation-of-legacy-cve-download-formats-now-underway-43701aafcc67). Learn more [here](https://medium.com/@cve_program/deprecation-of-legacy-cve-download-formats-now-underway-43701aafcc67).

## How to Download the CVE List

There are 2 main ways to download CVE Records from this repository:
1. using the [`git` command line tool](https://git-scm.com/) — this is the fastest way to keep the CVE List up-to-date using a tool most developers are familiar with.  For more information, see [the `git` section ](#git), below
2. using the Releases zip files.  For more information, see [the Releases section](#releases), below.

## git

Using the [`git` command line tool](https://git-scm.com/) or [any git UI clients](https://git-scm.com/downloads/guis) is the easiest way to stay up-to-date with the CVE List.  To get started, clone this repository:  `git clone git@github.com:CVEProject/cvelistV5.git`.
Once cloned, `git pull` at any time you need to get the latest updates, just like any other GitHub repository.


## Releases

This repository includes [release versions](https://github.com/CVEProject/cvelistV5/releases) of all current CVE Records generated from the official CVE Services API. All times are listed in [Greenwich Mean Time (GMT)](https://en.wikipedia.org/wiki/Greenwich_Mean_Time).  Each release contains a description of CVEs added or updated since the last release, and an Assets section containing the downloads.  Note that the zip files are quite large and so will take some time to download.
* Baseline downloads are issued at the end of each day at midnight and posted under Assets in the following file name format: `Year-Month-Day_all_CVEs_at_midnight.zip`, (e.g., `2024-04-01_all_CVEs_at_midnight.zip`).  This file remains unchanged for 24 hours.  If you are updating your CVE List using zip files daily (or less frequently), this is the best one to use.
* Hourly updates are also provided under Assets using the file name format: `Year-Month-Day _delta_CVEs_at_Hour 00Z.zip`, (e.g., `2024-04-01_delta_CVEs_at_0100Z.zip`).  This is useful if you need your CVE List to be accurate hourly.  Be aware that this file only contains the deltas since the baseline zip file.

## Known Issues with the cvelistV5 repository

The CVE Program is currently aware of the following issues with regard to CVE List downloads. These issues are currently being addressed by the [CVE Automation Working Group (AWG)](https://www.cve.org/ProgramOrganization/WorkingGroups#AutomationWorkingGroupAWG). Updates or resolutions will be noted here when available.

1. **Added 3/28/2023:** CVE Records published prior to 2023 may have significant publication, reserved, and update date discrepancies. As a result, this repository should not be used for CVE production metrics at this time. A fix will be forthcoming. 

## Reporting Issues 

Please use one of the following: 

- [Report repository and download file issues](https://github.com/CVEProject/cvelistV5/issues) (via the cvelistV5 repository Issue Tracker on GitHub)
- [Report issues with the content of a CVE Record](https://cveform.mitre.org/) (via the CVE Program Request Web Forms) 

## Pull Requests Not Allowed 

This repository contains CVE Records published by CVE Program partners. It does not accept pull requests.

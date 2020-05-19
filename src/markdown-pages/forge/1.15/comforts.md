---
title: 'Comforts'
author: 'C4'
firstVersion: '2.0'
latestVersion: '2.0.0.2'
icon: ../../../images/icons/comforts.png
project: 'https://www.curseforge.com/minecraft/mc-mods/comforts'
source: 'https://github.com/TheIllusiveC4/Comforts'
issues: 'https://github.com/TheIllusiveC4/Comforts/issues'
---

Comforts is a mod that adds sleeping bags and hammocks to Minecraft. These items can be used just like beds except they do not set a player's spawn point on use, safely preserving a player's spawn point at their home base. Just like beds, they also come in 16 different colors! The difference is that sleeping bags can be stacked and are more convenient to use on adventures and hammocks are like an inverse bed, turning day to night.

# Configuration

| Name                  | Variable            | Default | Description                                                                                                                                    |
| --------------------- | ------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Auto Use              | autoUse             | true    | Set to true to automatically use sleeping bags when placed                                                                                     |
| Night Hammocks        | nightHammocks       | false   | Set to true to enable sleeping in hammocks at night                                                                                            |
| Sleeping Bag Breakage | sleepingBagBreakage | 0.0     | The chance that a sleeping bag will break upon usage                                                                                           |
| Sleeping Bag Debuffs  | sleepingBagDebuffs  | []      | List of debuffs to apply to players after using the sleeping bag<br>Format: [effect] [duration(secs)] [power]                                  |
| Sleepy Factor         | sleepyFactor        | 2.0     | If Well-Rested is true, this value is used to determine how long you need before being able to sleep again (larger numbers = can sleep sooner) |
| Well-Rested           | wellRested          | false   | Set to true to prevent sleeping depending on how long you previously slept                                                                     |
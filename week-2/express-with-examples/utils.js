export let users = [
  {
    username: "SkyWatcher88",
    kidneys: [{ healthy: true }, { healthy: true }],
  },
  {
    username: "PixelMaster12",
    kidneys: [{ healthy: true }, { healthy: false }],
  },
  {
    username: "EpicGamerGirl",
    kidneys: [{ healthy: true }, { healthy: true }],
  },
  {
    username: "CodeNinja24",
    kidneys: [{ healthy: false }, { healthy: true }],
  },
  {
    username: "QuantumCoder",
    kidneys: [{ healthy: true }, { healthy: false }],
  },
  {
    username: "GamerDude007",
    kidneys: [{ healthy: true }, { healthy: true }],
  },
  {
    username: "MysticWarrior",
    kidneys: [{ healthy: false }, { healthy: false }],
  },
  {
    username: "CyberSamurai",
    kidneys: [{ healthy: true }, { healthy: true }],
  },
  {
    username: "LunaDreamer",
    kidneys: [{ healthy: false }, { healthy: true }],
  },
  {
    username: "GalacticVoyager",
    kidneys: [{ healthy: true }, { healthy: false }],
  },
];

export function removeUser(username) {
  users = users.filter((user) => user.username !== username);
}

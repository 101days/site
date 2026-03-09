const algorithmSidebar = {
  base: '/algorithm/',
  items: [
    { text: 'README', link: 'README' },
    { text: '童蒙三百题，新岁一卷码', link: '00' },
    { text: '新春摸鱼日，归来滑窗始', link: '11' },
    { text: '滑窗穷百变，倦极复摸鱼', link: '22' },
    { text: '33', link: '33' },
    { text: '44', link: '44' },
    { text: '55', link: '55' },
    { text: '66', link: '66' },
    { text: '77', link: '77' },
    { text: '88', link: '88' },
    { text: '99', link: '99' },
  ],
}

const gameSidebar = {
  base: '/game/',
  items: [
    { text: 'README', link: 'README' },
    {
      text: '第一周',
      collapsed: true,
      items: [
        { text: '00. 笨鸟，状态机，第一行代码', link: '00' },
        { text: '01. 元表，类，手搓 OOP', link: '01' },
        { text: '02. 暂停，随机，三个奖牌', link: '02' },
        { text: '03. 计划，实战，小丑牌', link: '03' },
        { text: '04. 砖块，组织，精灵图', link: '04' },
        { text: '05. 三月，周日，新想法', link: '05' },
        { text: '06. 小球，碰撞，源码学习', link: '06' },
      ],
    },
    {
      text: '第二周',
      collapsed: true,
      items: [
        { text: '07. 注释，教程，线性插值', link: '07' },
        { text: '08. Arrow，Jump，Tiles', link: '08' },
        { text: '09. Save&Load，Camera，Canvas', link: '09' },
        { text: '10. Collision，Strength，推箱子', link: '10' },
        { text: '11. 摆烂，游戏，砖块', link: '11' },
        { text: '12. 继续，游戏，LevelMaker', link: '12' },
        { text: '13. 翻译', link: '13' },
      ],
    },
    {
      text: '第三周',
      collapsed: true,
      items: [
        { text: '14', link: '14' },
        { text: '15', link: '15' },
        { text: '16', link: '16' },
        { text: '17', link: '17' },
        { text: '18', link: '18' },
        { text: '19', link: '19' },
        { text: '20', link: '20' },
      ],
    },
    {
      text: '第四周',
      collapsed: true,
      items: [
        { text: '21', link: '21' },
        { text: '22', link: '22' },
        { text: '23', link: '23' },
        { text: '24', link: '24' },
        { text: '25', link: '25' },
        { text: '26', link: '26' },
        { text: '27', link: '27' },
      ],
    },
    {
      text: 'BYTEPATH 教程',
      base: '/game/bytepath/',
      collapsed: true,
      items: [
        { text: '00. Introduction', link: '00' },
        { text: '01. Game Loop', link: '01' },
        { text: '02. Libraries', link: '02' },
        { text: '03. Rooms and Areas', link: '03' },
        { text: '04. Exercises', link: '04' },
        { text: '05. Game Basics', link: '05' },
        { text: '06. Player Basics', link: '06' },
        { text: '07. Player Stats and Attacks', link: '07' },
        { text: '08. Enemies', link: '08' },
        { text: '09. Director and Gameplay Loop', link: '09' },
        { text: '10. Coding Practices', link: '10' },
        { text: '11. Passives', link: '11' },
        { text: '12. More Passives', link: '12' },
        { text: '13. Skill Tree', link: '13' },
        { text: '14. Console', link: '14' },
        { text: '15. Final', link: '15' },
      ],
    },
  ],
}

export const sidebar = {
  '/algorithm/': algorithmSidebar,
  '/game/': gameSidebar,
}

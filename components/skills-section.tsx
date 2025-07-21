export function SkillsSection() {
  const skills = [
    { name: "𝐁𝐔𝐆 𝐁𝐎𝐔𝐍𝐓𝐘", level: 90 }, // Changed from React
    { name: "𝐁𝐀𝐂𝐊𝐖𝐀𝐑𝐃𝐒 𝐄𝐍𝐆𝐄𝐍𝐄𝐄𝐑𝐈𝐍𝐆", level: 85 }, // Changed from JavaScript
    { name: "𝐂++/𝐂#", level: 80 },
    { name: "HTML/CSS", level: 95 },
    { name: "Node.js", level: 75 },
    { name: "UI/UX Design", level: 85 },
  ]

  return (
    <section id="skills" className="py-20 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Skills</h2>

        <div className="space-y-6">
          {skills.map((skill) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between">
                <span className="text-white">{skill.name}</span>
                <span className="bg-purple-900/30 text-purple-300 border border-purple-500/30 px-2 py-1 rounded text-sm">
                  {skill.level}%
                </span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-purple-700"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

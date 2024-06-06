import styles from "../Skills/SkillsStyles.module.css";
import SkillListComponent from "./SkillListComponent";

function Skills() {
  const skillSet1 = ["HTML", "CSS", "Javascript", "Typescript", "Node"];
  const skillSet2 = [
    "React",
    "Angular",
    "Tailwind CSS",
    "Bootstrap",
    "Material UI",
  ];
  const skillSet3 = ["Redux", "Webpack", "Git", "Jest"];

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <SkillListComponent skills={skillSet1} />
      <hr />
      <SkillListComponent skills={skillSet2} />
      <hr />
      <SkillListComponent skills={skillSet3} />
      {/* <hr />
          <div className={styles.skillList}>
            <SkillList skill={skill.framework} />
          </div>
          <hr />
          <div className={styles.skillList}>
            <SkillList skill={skill.library} />
          </div> */}
      {/* </div> */}
      {/* <div className={styles.skillList}>
      <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="Javascript" />
        <SkillList src={checkMarkIcon} skill="Typescript" />
        <SkillList src={checkMarkIcon} skill="Node" />
      </div>
      <hr/>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="Angular" />
        <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
      </div>
      <hr/>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Redux" />
        <SkillList src={checkMarkIcon} skill="Webpack" />
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="Bootstrap" />
        <SkillList src={checkMarkIcon} skill="Jest" />
      </div> */}
    </section>
  );
}

export default Skills;

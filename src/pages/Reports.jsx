import { useMemo, useContext } from "react";
import { useSelector } from "react-redux";
import { AppContext } from "../context/AppContext";
import { Container, Row, Col, Card, ProgressBar } from "react-bootstrap";

function Reports() {
  const { theme } = useContext(AppContext);
  const skills = useSelector((state) => state.app.skills);

  const totalSkills = useMemo(() => skills.length, [skills]);

  const highestSkill = useMemo(() => {
    if (skills.length === 0) return null;
    return skills.reduce((prev, current) =>
      prev.level > current.level ? prev : current
    );
  }, [skills]);

  const lowestSkill = useMemo(() => {
    if (skills.length === 0) return null;
    return skills.reduce((prev, current) =>
      prev.level < current.level ? prev : current
    );
  }, [skills]);

  const overallGrade = useMemo(() => {
    if (skills.length === 0) return "N/A";
    const avg =
      skills.reduce((sum, skill) => sum + skill.level, 0) / skills.length;

    if (avg >= 85) return "A+";
    if (avg >= 75) return "A";
    if (avg >= 65) return "B";
    return "C";
  }, [skills]);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: theme === "dark" ? "#0f172a" : "#f4f6f8",
        paddingTop: "100px",
        paddingBottom: "60px",
        transition: "all 0.3s ease"
      }}
    >
      <Container>
        <h2
          className="text-center mb-5"
          style={{
            color: theme === "dark" ? "#38bdf8" : "#0f172a",
            fontWeight: "bold"
          }}
        >
          Skill Performance Reports
        </h2>

        {/* Summary Section */}
        <Row className="mb-5">
          <Col md={4}>
            <Card className="p-4 text-center">
              <h6>Total Skills</h6>
              <h2>{totalSkills}</h2>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="p-4 text-center">
              <h6>Overall Grade</h6>
              <h2 style={{ color: "#22c55e" }}>{overallGrade}</h2>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="p-4 text-center">
              <h6>Top Skill</h6>
              <h5>
                {highestSkill
                  ? `${highestSkill.name} (${highestSkill.level}%)`
                  : "N/A"}
              </h5>
            </Card>
          </Col>
        </Row>

        {/* Detailed Distribution */}
        <Card className="p-4">
          <h5 className="mb-4">Skill Distribution</h5>

          {skills.map((skill) => (
            <div key={skill.id} className="mb-3">
              <div className="d-flex justify-content-between">
                <strong>{skill.name}</strong>
                <span>{skill.level}%</span>
              </div>
              <ProgressBar
                now={skill.level}
                variant={
                  skill.level >= 80
                    ? "success"
                    : skill.level >= 60
                    ? "warning"
                    : "danger"
                }
                style={{ height: "15px" }}
              />
            </div>
          ))}
        </Card>

        {/* Lowest Skill Highlight */}
        {lowestSkill && (
          <Card className="p-4 mt-4 text-center">
            <h6>Area to Improve</h6>
            <h5 style={{ color: "#ef4444" }}>
              {lowestSkill.name} ({lowestSkill.level}%)
            </h5>
          </Card>
        )}
      </Container>
    </div>
  );
}

export default Reports;
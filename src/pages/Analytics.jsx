import { useContext, useMemo } from "react";
import { AppContext } from "../context/AppContext";
import { Container, Row, Col, Card, ProgressBar, Button } from "react-bootstrap";

function Analytics() {
  const { state, dispatch } = useContext(AppContext);

  const isDark = state.theme === "dark";

  const totalSkills = useMemo(() => state.skills.length, [state.skills]);

  const strongSkills = useMemo(
    () => state.skills.filter(skill => skill.level >= 80).length,
    [state.skills]
  );

  const averageSkill = useMemo(() => {
    const total = state.skills.reduce((sum, skill) => sum + skill.level, 0);
    return totalSkills === 0 ? 0 : Math.round(total / totalSkills);
  }, [state.skills, totalSkills]);

 return (
  <div
    style={{
      minHeight: "100vh",
      backgroundColor: "#0f172a",
      paddingTop: "100px",
      paddingBottom: "60px"
    }}
  >
    <Container>
      <h2
        className="text-center mb-5"
        style={{
          color: "#38bdf8",
          fontWeight: "bold",
          fontSize: "32px"
        }}
      >
        My Skill Analytics Dashboard
      </h2>

      <Row className="mb-5">
        <Col md={4}>
          <Card
            className="p-4 text-center"
            style={{
              backgroundColor: "#1e293b",
              border: "none",
              borderRadius: "15px",
              color: "#ffffff"
            }}
          >
            <h6>Total Skills</h6>
            <h2 style={{ color: "#38bdf8" }}>{totalSkills}</h2>
          </Card>
        </Col>

        <Col md={4}>
          <Card
            className="p-4 text-center"
            style={{
              backgroundColor: "#1e293b",
              border: "none",
              borderRadius: "15px",
              color: "#ffffff"
            }}
          >
            <h6>Strong Skills (80%+)</h6>
            <h2 style={{ color: "#22c55e" }}>{strongSkills}</h2>
          </Card>
        </Col>

        <Col md={4}>
          <Card
            className="p-4 text-center"
            style={{
              backgroundColor: "#1e293b",
              border: "none",
              borderRadius: "15px",
              color: "#ffffff"
            }}
          >
            <h6>Average Skill Level</h6>
            <h2 style={{ color: "#f59e0b" }}>{averageSkill}%</h2>
          </Card>
        </Col>
      </Row>

      {state.skills.map(skill => (
        <Card
          key={skill.id}
          className="mb-4 p-4"
          style={{
            backgroundColor: "#1e293b",
            border: "none",
            borderRadius: "15px",
            color: "#ffffff"
          }}
        >
          <div className="d-flex justify-content-between">
            <strong>{skill.name}</strong>
            <span>{skill.level}%</span>
          </div>

          <ProgressBar
            now={skill.level}
            style={{
              height: "12px",
              backgroundColor: "#334155"
            }}
            variant="info"
            className="mt-3"
          />

          <Button
            variant="outline-danger"
            size="sm"
            className="mt-3"
            onClick={() =>
              dispatch({ type: "REMOVE_SKILL", payload: skill.id })
            }
          >
            Remove
          </Button>
        </Card>
      ))}
    </Container>
  </div>
);
}
export default Analytics;

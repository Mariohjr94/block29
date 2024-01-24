import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetPlayerQuery } from "../API";
import { useNavigate } from "react-router-dom";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

const SinglePlayer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, error, isLoading } = useGetPlayerQuery(id);

  useEffect(() => {
    // Fetch player details when the component mounts
    // You may want to add error handling based on your API response structure
    if (!isLoading && !error && data) {
      console.log(data.data.player);
    }
  }, [data, error, isLoading]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching player details</p>;
  }

  if (!data || !data.data.player) {
    return <p>Player not found</p>;
  }

  const player = data.data.player;
  console.log(player);
  return (
    <div className="vh-100">
      <MDBContainer>
        <MDBRow className="justify-content-center">
          <MDBCol md="9" lg="7" xl="5" className="mt-5">
            <MDBCard style={{ borderRadius: "15px" }}>
              <MDBCardBody className="p-4">
                <div className="d-flex text-black">
                  <div className="flex-shrink-0">
                    <MDBCardImage
                      style={{ width: "180px", borderRadius: "10px" }}
                      src={player.imageUrl}
                      alt={player.name}
                      fluid
                    />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <MDBCardTitle>{player.name}</MDBCardTitle>
                    <MDBCardText>{player.breed}</MDBCardText>

                    <div
                      className="d-flex justify-content-start rounded-3 p-2 mb-2"
                      style={{ backgroundColor: "#efefef" }}
                    >
                      <div>
                        <p className="small text-muted mb-1">Status</p>
                        <p className="mb-0">{player.status}</p>
                      </div>
                    </div>
                    <div className="d-flex pt-1">
                      <MDBBtn
                        outline
                        className="me-1 flex-grow-1"
                        onClick={() => navigate("/players/")}
                      >
                        Go back
                      </MDBBtn>
                    </div>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default SinglePlayer;

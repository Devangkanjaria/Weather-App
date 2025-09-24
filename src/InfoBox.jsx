import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
// import AcUnitIcon from '@mui/icons-material/AcUnit';
// import WbSunnyIcon from '@mui/icons-material/WbSunny';
// import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";

  const HOT_URL =
    "https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  const COLD_URL =
    "https://images.unsplash.com/photo-1480775661506-541bb9d526b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fENPTER8ZW58MHx8MHx8fDA%3D";
  const RAIN_URL =
    "https://media.istockphoto.com/id/105934727/photo/rain.webp?a=1&b=1&s=612x612&w=0&k=20&c=Z-21JImEjaPh55Ek00YRctuv1VNPwKJnlSDfySyonYw=";

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
              {/* {
              info.humidity > 80
                ? <ThunderstormIcon/>
                : info.temp > 15
                ? <WbSunnyIcon/>
                : <AcUnitIcon/>
            } */}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              
            </Typography>
          </CardContent>
          <p>Temperature = {info.temp}&deg;</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp : {info.tempMin}&deg;C</p>
          <p>Max Temp : {info.tempMax}&deg;C</p>
          <p>
            The weather can be described as <i>{info.weather}</i> feels like{" "}
            {info.feelslike}&deg;C
          </p>
        </Card>
      </div>
    </div>
  );
}

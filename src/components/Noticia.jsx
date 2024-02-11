import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Link from "@mui/material/Link"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"

function Noticia({noticia}) {

    const {urlToImage,url,title,description,source}= noticia
  return (
    <Grid item md={6} lg={4}>
        <Card>       
            {urlToImage && (
                <CardMedia
                height={'250'}
                component={"img"}
                alt={`Imagen de la noticia ${title}`}
                image={urlToImage}
                />
            )}
            <CardContent>
                <Typography variant="body1" color="error">
                    {source.name}
                </Typography>
                <Typography variant="h5" component='div'>
                    {title}
                </Typography>
                <Typography variant="body2" >
                    {description}
                </Typography>
                
            </CardContent>
                
            <CardActions>
                <Link href={url} width={'100%'} textAlign={'center'} 
                      target='_blank' variant="button" color={'error'}
                    sx={{textDecoration:'none'}}
                      >
                    Leer Noticia
                </Link>
            </CardActions>
        </Card>
    </Grid>
  )
}

export default Noticia

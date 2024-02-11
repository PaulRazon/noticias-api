import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import useNoticias from "../hooks/useNoticias"
import Noticia from "./Noticia"

function ListadoNoticias() {
    const {noticias,totalNoticias,handleChangePagina} = useNoticias()
    const totalPaginas= Math.ceil(totalNoticias/20)//Math.ceil redondea hacia arriba

    
    return (
    <>
        <Typography
            textAlign={'center'}
            marginY={5}
            variant="h3"
            component={'h2'}
        >   Ultimas Noticias
        </Typography> 
        <Grid container spacing={2}>
            {noticias.map(noticia=>(
                <Noticia
                    key={noticia.url}
                    noticia={noticia}
                />
            ))}
        </Grid>

        <Stack 
            spacing={2}
            direction={'row'}
            justifyContent={'center'}
            alignItems={'center'}
            sx={{
                marginY:7
            }}
        >
            <Pagination count={totalPaginas} color="secondary" 
                onChange={handleChangePagina}
            />
        </Stack>
    </>
  )
}

export default ListadoNoticias

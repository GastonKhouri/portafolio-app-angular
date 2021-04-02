

export interface InfoPagina {
	titulo:            string;
	email:             string;
	nombre_corto:      string;
	facebook:          string;
	twitter:           string;
	instagram:         string;
	tumblr:            string;
	equipo_de_trabajo: string[];
}

export interface InfoEquipo {
  frase:     string;
  nombre:    string;
  subtitulo: string;
  twitter:   string;
  url:       string;
}

export interface Producto {
  categoria: string;
  cod:       string;
  titulo:    string;
  url:       string;
}

export interface ProductoDescripcion {
  categoria:  string;
  desc1:      string;
  desc2:      string;
  producto:   string;
  resumen:    string;
  subtitulo1: string;
  subtitulo2: string;
}

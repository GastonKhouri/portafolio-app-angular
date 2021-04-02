

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

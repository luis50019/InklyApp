import { fs } from "./responsive";

export const TYPOGRAPHY = {
  header: {
    // para los titutlos grandes
    fontSize: fs(60),
    fontWeight: "800",
  },
  title: {
    // para los titulos de secciones
    fontSize: fs(22),
    fontWeight: "700",
  },
  body: {
    // para texto normal, descripciones,contenido principal
    fontSize: fs(16),
    fontWeight: "400",
  },
  caption: {
    // para fechas,tecxto secundario,metadata, info pequeñea
    fontSize: fs(12),
  },
  subtitle: {
    // para textos muy pequeños, labels discrtos, notas minimas
    fontSize: fs(10),
  },
};

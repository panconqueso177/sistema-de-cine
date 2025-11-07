import { Film, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/30 mt-16">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary p-2 rounded-lg">
                <Film className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">CineClub Idiomas</h3>
                <p className="text-xs text-muted-foreground">Universidad Cultural</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Promoviendo el cine internacional y el aprendizaje de idiomas a través del séptimo arte.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-muted-foreground hover:text-accent transition-colors">
                  Cartelera
                </a>
              </li>
              <li>
                <a href="/reservations" className="text-muted-foreground hover:text-accent transition-colors">
                  Mis Reservas
                </a>
              </li>
              <li>
                <a href="/about" className="text-muted-foreground hover:text-accent transition-colors">
                  Acerca del CineClub
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Facultad de Idiomas, Campus Principal</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                <a
                  href="mailto:cineclub@universidad.edu"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  cineclub@universidad.edu
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 CineClub Idiomas. Todos los derechos reservados. • Hecho con ❤️ por estudiantes de programación.</p>
        </div>
      </div>
    </footer>
  )
}

import Link from "next/link"
import { Film, User, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-primary p-2.5 rounded-lg group-hover:bg-primary/90 transition-colors">
              <Film className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground tracking-tight">CineClub Idiomas</h1>
              <p className="text-xs text-muted-foreground">Universidad Cultural</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Cartelera
            </Link>
            <Link
              href="/reservations"
              className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
            >
              Mis Reservas
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
            >
              Acerca de
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <User className="h-5 w-5" />
            </Button>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="hidden md:flex border-accent/50 text-accent hover:bg-accent/10 bg-transparent"
            >
              <Link href="/admin">
                <Shield className="h-4 w-4 mr-2" />
                Admin
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

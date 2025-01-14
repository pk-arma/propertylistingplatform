
export default function BlogLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section>
          <div className="flex">
      {children}
      </div>
      </section>
  }
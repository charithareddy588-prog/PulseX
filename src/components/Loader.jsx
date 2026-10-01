function Loader() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

      {[1, 2, 3, 4].map((item) => (
        <div
          key={item}
          className="overflow-hidden rounded-2xl bg-white shadow-sm dark:bg-zinc-900"
        >

          <div className="h-64 animate-pulse bg-zinc-200 dark:bg-zinc-800" />

          <div className="space-y-4 p-5">

            <div className="h-3 w-1/3 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />

            <div className="h-5 w-3/4 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />

            <div className="h-4 w-1/2 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />

            <div className="h-8 w-1/3 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />

          </div>

        </div>
      ))}

    </div>
  );
}

export default Loader;
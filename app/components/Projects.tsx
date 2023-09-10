// import '../styles/Projects.css';

export default function Projects() {
  return (
    <div className="max-w-full pt-10">
      <div className="max-w-screen sm:max-w-80% md:max-w-60% mx-auto space-y-3 mb-8">
        <h2 className="text-4xl font-bold">Projects</h2>
        <p className="text-xl text-theme-darkgray">Here&apos;s a list of software projects I&apos;ve produced over the past few years.</p>
      </div>
      <div className="bg-neutral-300 border-y-0 border-theme-lightgray shadow-inner max-w-full min-h-[32rem] max-h-[32rem] flex flex-row gap-12 overflow-x-scroll overflow-y-hidden p-8">
        <Project name="Snek Compiler (in Rust)">
          Sample description from here on out yeah everything goes out to everything.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper eget duis at tellus. Odio facilisis mauris sit amet massa vitae tortor condimentum lacinia. Velit aliquet sagittis id consectetur purus ut. Leo urna molestie at elementum. Est ullamcorper eget nulla facilisi etiam dignissim diam. Eu turpis egestas pretium aenean pharetra. Amet consectetur adipiscing elit ut. Pellentesque habitant morbi tristique senectus et. Et malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Urna molestie at elementum eu facilisis sed odio morbi quis. Tellus rutrum tellus pellentesque eu tincidunt tortor.

          Vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean. In pellentesque massa placerat duis ultricies. Nunc pulvinar sapien et ligula ullamcorper malesuada proin. At elementum eu facilisis sed odio morbi quis commodo odio. Consectetur adipiscing elit ut aliquam purus sit. Scelerisque eu ultrices vitae auctor eu augue. Morbi tincidunt ornare massa eget egestas purus viverra accumsan. Scelerisque viverra mauris in aliquam sem fringilla ut. Vitae et leo duis ut. Ipsum nunc aliquet bibendum enim facilisis gravida. Lacus vel facilisis volutpat est.

          Leo in vitae turpis massa sed elementum tempus egestas. Nisl purus in mollis nunc sed id semper. Odio aenean sed adipiscing diam donec. A diam sollicitudin tempor id eu nisl nunc mi. Posuere morbi leo urna molestie at elementum eu facilisis sed. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Posuere morbi leo urna molestie at elementum eu facilisis. Mi in nulla posuere sollicitudin aliquam. Morbi non arcu risus quis varius quam. Ac felis donec et odio. Eu mi bibendum neque egestas congue.

          Scelerisque in dictum non consectetur a erat nam at. Blandit aliquam etiam erat velit scelerisque. Sed cras ornare arcu dui vivamus arcu felis bibendum. Ut sem nulla pharetra diam sit amet. Integer eget aliquet nibh praesent tristique magna sit. Ornare arcu odio ut sem. Lacus suspendisse faucibus interdum posuere. Dignissim enim sit amet venenatis urna cursus eget nunc. Turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet. Leo vel fringilla est ullamcorper eget. Ultrices eros in cursus turpis massa tincidunt. Feugiat in fermentum posuere urna nec tincidunt. Adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque. Vestibulum lectus mauris ultrices eros. Egestas congue quisque egestas diam in arcu cursus euismod. Purus faucibus ornare suspendisse sed nisi lacus sed viverra. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper.

          Id consectetur purus ut faucibus pulvinar. Justo donec enim diam vulputate ut pharetra sit amet aliquam. Etiam sit amet nisl purus in. Eget nulla facilisi etiam dignissim diam quis. Sed sed risus pretium quam. Facilisis magna etiam tempor orci eu lobortis elementum nibh. Sit amet porttitor eget dolor morbi non arcu. Cras ornare arcu dui vivamus arcu felis. Consectetur adipiscing elit pellentesque habitant. Arcu risus quis varius quam. Sodales ut etiam sit amet nisl purus in mollis.
        </Project>
        <Project name="Yodie ISA and Microprocessor (in SystemVerilog and Assembly)">
          Sample description from here on out yeah everything goes out to everything.
        </Project>
        <Project name="Raytracer (in C++)">
          Sample description from here on out yeah everything goes out to everything.
        </Project>
        <Project name="Bujo: Web-based Bullet Journal (in web stack)">
          Sample description from here on out yeah everything goes out to everything.
        </Project>
        <Project name="Open Journey: A 2D Zelda-esque Game">
          Sample description from here on out yeah everything goes out to everything.
        </Project>
        <Project name="Test 6">
          Sample description from here on out yeah everything goes out to everything.
        </Project>
      </div>
    </div>
  );
}

interface ProjectProps {
  name: string,
  children: string,
}

function Project({ name, children }: ProjectProps) {
  return (
    <div className="shrink-0 max-w-lg shadow-md bg-slate-100 rounded-md p-6 w-[32rem] max-h-90%">
      <div className="max-h-full overflow-y-scroll space-y-3">
        <h3 className="text-2xl text-theme-black font-bold">{name}</h3>
        <p className="text-xl text-theme-darkgray">{children}</p>
      </div>
    </div>
  )
}
import { type FlowComponent } from "solid-js";

const AppLayout: FlowComponent = (props) => {
  return (
    <div class="h-screen bg-white">
      <div class="pb-[calc(env(safe-area-inset-bottom) + 4rem)]">
        {props.children}
      </div>

      <nav class="fixed z-100 bottom-0 left-0 right-0 bg-white border-t border-gray-200 pb-[env(safe-area-inset-bottom)]"
        style={{
          background: "linear-gradient(180deg, #0D0E1200 0%, #0D0E12 100%)" // transparent to white
        }}
      >
        <div class="flex items-center justify-between px-4">
          <a href="/app/today" class="flex items-center gap-2 py-2 text-gray-400 hover:text-gray-600">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
            </svg>
            <span>Friends</span>
          </a>

          <a href="/app/friends" class="flex items-center gap-2 py-2 text-gray-400 hover:text-gray-600">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
            </svg>
            <span>Today</span>
          </a>

          <a href="/app/settings" class="flex items-center gap-2 py-2 text-gray-400 hover:text-gray-600">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
            </svg>
            <span>Messages</span>
          </a>
        </div>
      </nav>
    </div>
  )
};

export default AppLayout;

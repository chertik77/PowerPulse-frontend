import { Dialog } from '@base-ui/react/dialog'

import { Icon } from '@/shared/ui'

import { HeaderLogoutBtn } from './HeaderLogoutBtn'
import { HeaderMenuData } from './HeaderMenuData'

export const HeaderBurgerMenu = () => (
  <Dialog.Root>
    <Dialog.Trigger className='tablet:size-8 desktop:hidden size-6'>
      <Icon
        name='menu'
        className='stroke-orange size-full'
      />
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Backdrop
        className='data-open:animate-in data-open:fade-in-0
          data-closed:animate-out data-closed:fade-out-0 fixed inset-0 z-50
          bg-black/40'
      />
      <Dialog.Popup
        className='bg-orange data-open:animate-in data-open:fade-in-0
          data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0
          data-closed:zoom-out-95 tablet:w-87.5 fixed top-0 right-0 z-50 flex
          h-screen w-50 flex-col'>
        <Dialog.Close>
          <Icon
            name='x'
            className='tablet:size-8 tablet:right-8 tablet:top-6.5 absolute
              top-5 right-5 size-6 stroke-white'
          />
        </Dialog.Close>
        <Dialog.Title className='sr-only'>Menu</Dialog.Title>
        <HeaderMenuData
          className='tablet:pt-70 mx-auto flex-col pt-61.25
            [&_a]:aria-[current="page"]:border-white'
        />
        <HeaderLogoutBtn
          className='tablet:pb-8 tablet:pl-8 tablet:text-md! mt-auto mr-auto
            pb-5 pl-5 text-base!'
        />
      </Dialog.Popup>
    </Dialog.Portal>
  </Dialog.Root>
)

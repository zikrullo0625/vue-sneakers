import { library } from '@fortawesome/fontawesome-svg-core'
import * as solid from '@fortawesome/free-solid-svg-icons'
import * as regular from '@fortawesome/free-regular-svg-icons'
import * as brands from '@fortawesome/free-brands-svg-icons'

const iconsToUse = [
    ['fas', 'user'],
    ['fas', 'home'],
    ['far', 'heart'],
    ['fab', 'github'],
]

iconsToUse.forEach(([pack, name]) => {
    let source
    if (pack === 'fas') source = solid
    if (pack === 'far') source = regular
    if (pack === 'fab') source = brands

    Object.keys(source).forEach(key => {
        const icon = source[key]
        if (icon?.iconName === name) {
            library.add(icon)
        }
    })
})

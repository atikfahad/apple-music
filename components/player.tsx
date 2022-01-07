import {
    ButtonGroup,
    Box,
    IconButton,
    RangeSlider,
    RangeSliderFilledTrack,
    RangeSliderTrack,
    RangeSliderThumb,
    Center,
    Flex,
    Text
} from '@chakra-ui/react'
import ReactHowler from 'react-howler'
import { useEffect, useRef, useState } from 'react'
import {
    MdOutlinePauseCircleFilled,
    MdOutlineRepeat,
    MdShuffle,
    MdSkipPrevious,
    MdSkipNext,
    MdOutlinePlayCircleFilled,
} from 'react-icons/md'
import { useStoreActions } from 'easy-peasy'
import { defaultTo } from 'lodash'

const Player = () => {
    return (
        <Box>Player</Box>
    )
}
export default Player;
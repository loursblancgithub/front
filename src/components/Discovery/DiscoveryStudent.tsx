import React, {useCallback, useEffect, useReducer, useRef, useState} from "react"
import InfiniteScroller, {InfiniteScrollerRef, loaderCallback} from "../Common/InfiniteScroller"
import {getAllPromo, searchStudents} from "../../data/student"
import {useTranslation} from "react-i18next"
import {Input, Select, Switch} from "antd"
import {HorizontalSpacer} from "../../pages/discovery"
import StudentCard from "./StudentCard"
import {FilterReducerAction, StudentPreview} from "../../data/student/types"
import {SearchItem} from "../../data/searchbar/types"

const {Option} = Select

type StudentFilter = {
    promos: number[]
    name?: string
    atoz?: boolean
}

const reducer: React.Reducer<StudentFilter, FilterReducerAction> = (filter, action) => {
    const newFilter = {...filter}
    switch (action.type) {
        case "ADD_PROMO":
            newFilter.promos.push(action.promo)
            break
        case "REMOVE_PROMO":
            const index = newFilter.promos.indexOf(action.promo)
            if (index > -1)
                newFilter.promos.splice(index, 1)
            break
        case "TOGGLE_SORT":
            newFilter.atoz = !newFilter.atoz
            break
        case "INIT_FILTER":
            return {promos: []}
    }
    return newFilter
}

const parseSearchResults = (results: SearchItem[]): StudentPreview[] => {
    return results.map(r => {
        const [firstName, lastName] = r.name.split(" ")
        return ({
            id: r.id,
            firstName,
            lastName,
            photoUrlThumb: r.thumbURL,
            promo: +r.description!
        })
    }
    )
}

const DiscoveryStudent: React.FC = () => {
    const {t} = useTranslation("discovery")
    const [students, setStudents] = useState<StudentPreview[]>([])
    const [filteredStudent, setFilteredStudents] = useState<StudentPreview[]>([])
    const [filter, setFilter] = useReducer(reducer, {promos: []})
    const [promos, setPromos] = useState<number[]>([])
    const scrollerRef = useRef<InfiniteScrollerRef>(null)

    const filterFn = useCallback((s: StudentPreview) => (
        !filter.promos.length || filter.promos.includes(s.promo)
    ), [filter.promos.length])

    // Infinite Scroller next students
    const getNextStudents: loaderCallback = useCallback(async (page: number) => {
        const res = await searchStudents(page, filter.name, filter.promos.toString(), filter.atoz)
        if(res.status === 200) {
            const parsedResults = parseSearchResults(res.data.content)

            setStudents(prevState => [...prevState, ...parsedResults])
            setFilteredStudents(prevState => [...prevState, ...parsedResults.filter(filterFn)])
            return res.data.last
        }
        return false
    }, [filter.promos.length, filterFn, filter.atoz])

    /**
     * Get all available promotions on component first load
     */
    useEffect(() => {
        getAllPromo().then(res => {
            setPromos(res.data)
        })
    }, [])

    /**
     * Filter Update
     */
    useEffect(() => {
        setFilteredStudents(students.filter(filterFn))
    }, [filterFn, filter.promos.length])

    /**
     * Sorting Update
     */
    useEffect(() => {
        setStudents([])
        setFilteredStudents([])

        scrollerRef!.current!.resetData()
    }, [filter.atoz])


    return (
        <div className="container mx-auto text-center mt-10 mb-20">
            <div className="font-bold text-indigo-500 py-3 text-4xl">
                {t("students")}
            </div>
            <HorizontalSpacer spacing={6}/>

            <div className="flex flex-wrap sm:flex-no-wrap sm:justify-between">
                {/* Todo: replace with searchBar */}
                <Input placeholder={t("placeholder-search")} disabled={true} className="text-center text-sm sm:text-lg rounded-full w-11/12 sm:w-full mx-auto sm:mx-0"/>
                <div className="flex justify-end w-full my-2 sm:my-0 sm:w-1/3 mr-0 sm:mr-3 md:mr-5 lg:mr-6 xl:mr-10">
                    <Select mode="multiple" className="w-1/2 sm:w-40 mx-2"
                        placeholder={t("promotions")}
                        onSelect={(promo: any) => setFilter({type: "ADD_PROMO", promo})}
                        onDeselect={(promo: any) => setFilter({type: "REMOVE_PROMO", promo})}
                    >
                        {
                            promos.map(p => <Option key={p} value={p}>{p}</Option>)
                        }
                    </Select>
                    <Switch checkedChildren="Az" unCheckedChildren="Za" defaultChecked={filter.atoz}
                        onChange={() => setFilter({type: "TOGGLE_SORT"})}/>
                </div>
            </div>

            <HorizontalSpacer spacing={8}/>
            {/* List of students */}
            <InfiniteScroller
                ref={scrollerRef}
                watch="DOWN"
                callback={getNextStudents}
                triggerDistance={5}
                className="flex flex-wrap justify-start"
            >
                {filteredStudent.map((student, i) =>
                    <StudentCard key={i} student={student}/>
                )}
            </InfiniteScroller>
        </div>
    )
}

export default DiscoveryStudent
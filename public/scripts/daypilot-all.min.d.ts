/* Copyright 2005 - 2020 Annpoint, s.r.o.
 Use of this software is subject to license terms.
 https://www.daypilot.org/
 */

type GlobalDate = Date;

export module DayPilot {

    class Scheduler extends SchedulerPropsAndEvents {
        constructor(id: string, options?: SchedulerConfig);

        v: string;

        autoRefreshPause(): void;
        autoRefreshStart(force: boolean): void;
        clearSelection(): void;
        dispose(): void;
        exportAs(format?: "svg" | "png" | "jpeg", options?: any): Export;
        getCoords(): {x: number, y: number, row: DayPilot.Row, cell: DayPilot.Cell, time: DayPilot.Date};
        getDate(pixels: number, precise?: boolean, isEnd?:boolean): DayPilot.Date;
        getScrollX(): number;
        getScrollY(): number;
        getViewPort(): {start: DayPilot.Date, end: DayPilot.Date, resources: string[]};
        hide(): void;
        init(): void;
        loadingStart(): void;
        loadingStop(): void;
        message(msg: string, options?: { delay?: number, cssClass?: string }): void;
        scrollTo(date: string | DayPilot.Date): void;
        scrollTo(date: string | DayPilot.Date, animated: boolean | number | "fast" | "normal" | "slow" | "linear", position?: "left" | "middle" | "right"): void;
        scrollToResource(id: string | number | DayPilot.Row): void;
        selectTimeRange(start: DayPilot.Date | string, end: DayPilot.Date | string, resource: string|number, dontFireEvent?:boolean): void;
        setHeight(pixels: number): void;
        setScroll(scrollX: number, scrollY: number): void;
        setScrollX(scrollX: number): void;
        setScrollY(scrollY: number): void;
        show(): void;
        uiBlock(): void;
        uiUnblock(): void;
        update(options?: SchedulerConfig): void;
        visibleStart(): DayPilot.Date;
        visibleEnd(): DayPilot.Date;

        events: {
            list: EventData[];

            add(e: DayPilot.Event | EventData): void;
            addByData(data: EventData): void;
            all(): DayPilot.Event[];
            edit(e: DayPilot.Event): void;
            filter(param: any): void;
            find(id: string): DayPilot.Event;
            find(filter: (data: DayPilot.Event) => boolean): DayPilot.Event;
            findRecurrent(masterId: string, time: DayPilot.Date | string): DayPilot.Event;
            focus(e: DayPilot.Event): void;
            forRange(start?: DayPilot.Date | string, end?: DayPilot.Date | string): DayPilot.Event[];
            load(url: string,
                 success: (args: { data: any; preventDefault(): void; } ) => void,
                 error: (args: { request: XMLHttpRequest, exception: any; } ) => void
            ): void;
            remove(e: DayPilot.Event): void;
            removeById(id: string | number): void;
            removeByData(data: EventData): void;
            scrollIntoView(e: DayPilot.Event): void;
            update(e: DayPilot.Event | EventData): void;
            updateByData(data: EventData): void;
        };

        cells: {
            all(): CellArray;
            findXy(x: number, y: number): CellArray;
            find(start: DayPilot.Date, resource: string): CellArray;
            findByPixels(x: number, y: number): CellArray;
        };

        infinite: {
            scrollTo(date: DayPilot.Date): void;
            shiftStart(days: number): void;
        };

        links:  {
            add(data: LinkData | DayPilot.Link): void;
            find(id: string | number): DayPilot.Link;
            findByFromTo(from: DayPilot.Date | string, to: DayPilot.Date | string): DayPilot.Link;
            remove(data: LinkData | DayPilot.Link): void;
            load(url: string,
                 success: (args: { data: any; preventDefault(): void; } ) => void,
                 error: (args: { request: XMLHttpRequest, exception: any; } ) => void
            );
            list: LinkData[];
        };

        multiselect: {
            add(e: DayPilot.Event, dontRedraw?: boolean): void;
            clear(dontRedraw?: boolean): void;
            events(): DayPilot.Event[];
            get(): DayPilot.Event[];
            isSelected(e: DayPilot.Event): boolean;
            redraw(): void;
            remove(e: DayPilot.Event, dontRedraw?: boolean): void;
            startRectangle(): void;
        };

        // legacy
        range: {
            all(): DayPilot.Selection[];
        };

        multirange: {
            add(sel: DayPilot.Selection): void;
            clear(): void;
            get(): DayPilot.Selection[];
        };

        rows: {
            all(): DayPilot.Row[];
            collapseAll(): void;
            each(f: () => DayPilot.Row): void;
            edit(row: DayPilot.Row): void;
            expand(level?: number): void;
            expandAll(): void;
            filter(param: any): void;
            find(filter: (row: DayPilot.Row) => boolean, startIndex?: number): DayPilot.Row;
            find(id: string | number, start?: DayPilot.Date | string): DayPilot.Row;
            headerHide(): void;
            headerShow(): void;
            headerToggle(): void;
            load(url: string,
                 success: (args: { data: any; preventDefault(): void; } ) => void,
                 error: (args: { request: XMLHttpRequest, exception: any; } ) => void
            ): void;
            remove(row: DayPilot.Row): void;
            sort(spec?: string | {field: string, order?: "asc" | "desc"}): void;
            visible(): DayPilot.Row[];

            selection: {
                add(row: DayPilot.Row): void;
                clear(): void;
                get(): DayPilot.Row[];
                isSelected(row: DayPilot.Row): boolean;
                remove(row: Row): void;
            };
        };

        zoom: {
            setActive(index: number, position?: "left" | "middle" | "right"): void;
            setActive(id: string, position?: "left" | "middle" | "right"): void;
            active: number;
        };
    }

    class SchedulerPropsAndEvents {
        allowDefaultContextMenu?: boolean;
        allowEventOverlap?: boolean;
        allowMultiMove?: boolean;
        allowMultiRange?: boolean;
        allowMultiResize?: boolean;
        allowMultiSelect?: boolean;
        api?: number;
        autoRefreshCommand?: string;
        autoRefreshEnabled?: boolean;
        autoRefreshInterval?: number;
        autoRefreshMaxCount?: number;
        autoScroll?: "Drag" | "Always" | "Disabled";
        backendUrl?: string;
        beforeCellRenderCaching?: boolean;
        blockOnCallBack?: boolean;
        bubble?: DayPilot.Bubble | string;
        businessBeginsHour?: number;
        businessEndsHour?: number;
        businessWeekends?: boolean;
        cellBubble?: DayPilot.Bubble | string;
        cellDuration?: number;
        cellGroupBy?: GroupBy;
        cellSweeping?: boolean;
        cellSweepingCacheSize?: number;
        cellWidth?: number;
        cellWidthMin?: number;
        cellWidthSpec?: "Auto" | "Fixed";
        cellsMarkBusiness?: boolean;
        clientState?: any;
        contextMenu?: DayPilot.Menu | string;
        contextMenuLink?: DayPilot.Menu | string;
        contextMenuResource?: DayPilot.Menu | string;
        contextMenuSelection?: DayPilot.Menu | string;
        cornerHtml?: string;
        crosshairTimeHeaderLevel?: "Last" | number;
        crosshairType?: "Full" | "Header" | "Disabled";
        days?: number;
        doubleClickTimeout?: number;
        dragOutAllowed?: boolean;
        drawBlankCells?: boolean;
        durationBarHeight?: number;
        durationBarMode?: "Duration" | "PercentComplete";
        durationBarVisible?: boolean;
        dynamicEventRendering?: boolean;
        dynamicEventRenderingCacheSize?: number;
        dynamicEventRenderingCacheSweeping?: boolean;
        dynamicEventRenderingMargin?: number;
        dynamicEventRenderingMarginX?: number;
        dynamicEventRenderingMarginY?: number;
        dynamicLoading?: boolean;
        eventClickHandling?: "Enabled" | "Disabled" | "CallBack" | "Edit" | "Select" | "ContextMenu" | "Bubble";
        eventDeleteHandling?: "Update" | "Disabled" | "CallBack";
        eventDoubleClickHandling?: "Enabled" | "Disabled" | "CallBack" | "Edit" | "Select" | "ContextMenu" | "Bubble";
        eventEditHandling?: "Disabled" | "Update" | "CallBack";
        eventEditMinWidth?: number;
        eventEndSpec?: "DateTime" | "Date";
        eventHeight?: number;
        eventHoverHandling?: "Bubble" | "Disabled";
        eventHtmlLeftMargin?: number;
        eventHtmlRightMargin?: number;
        eventMarginBottom?: number;
        eventMarginLeft?: number;
        eventMarginRight?: number;
        eventMinWidth?: number;
        eventMoveHandling?: "Update" | "Disabled" | "CallBack" | "Notify";
        eventMoveMargin?: number;
        eventMoveSkipNonBusiness?: boolean;
        eventMoveToPosition?: boolean;
        eventMovingStartEndEnabled?: boolean;
        eventMovingStartEndFormat?: string;
        eventResizeHandling?: "Update" | "Disabled" | "CallBack" | "Notify";
        eventResizeMargin?: number;
        eventResizingStartEndEnabled?: boolean;
        eventResizingStartEndFormat?: string;
        eventRightClickHandling?: "Enabled" | "Disabled" | "CallBack" | "Edit" | "Select" | "ContextMenu" | "Bubble";
        eventSelectHandling?: "Disabled" | "Update" | "CallBack";
        eventStackingLineHeight?: number;
        eventTapAndHoldHandling?: "Move" | "ContextMenu";
        eventTextWrappingEnabled?: boolean;
        eventUpdateInplaceOptimization?: boolean;
        eventVersionHeight?: number;
        eventVersionMargin?: number;
        eventVersionPosition?: "Above" | "Below";
        eventVersionsEnabled?: boolean;
        eventVersionsReserveSpace?: boolean;
        eventsLoadMethod?: "GET" | "POST";
        floatingEvents?: boolean;
        floatingTimeHeaders?: boolean;
        groupConcurrentEvents?: boolean;
        groupConcurrentEventsLimit?: number;
        headerHeight?: number;
        height?: number;
        heightSpec?: "Auto" | "Max" | "Fixed" | "Parent100Pct" | "Max100Pct";
        hideBorderFor100PctHeight?: boolean;
        hideUntilInit?: boolean;
        infiniteScrollingEnabled?: boolean;
        infiniteScrollingMargin?: number;
        infiniteScrollingStepDays?: number;
        initEventEnabled?: boolean;
        jointEventsMove?: boolean;
        jointEventsResize?: boolean;
        layout?: "DivBased" | "TableBased";
        linkBottomMargin?: number;
        linkCreateHandling?: "Disabled" | "Update" | "CallBack" | "Notify";
        linkPointSize?: number;
        linksLoadMethod?: "GET" | "POST";
        loadingLabelText?: string;
        loadingLabelVisible?: boolean;
        locale?: string | DayPilot.Locale;
        messageBarPosition?: "Top" | "Bottom";
        messageHideAfter?: number;
        messageHideOnMouseOut?: boolean;
        moveBy?: "Full" | "Top" | "Left";
        multiMoveVerticalMode?: "Disabled" | "Master" | "All";
        //multiSelectRectangle?: "Disabled" | "Free" | "Row";
        rectangleSelectHandling?: "Disabled" | "Enabled" | "EventSelect";
        rectangleSelectMode?: "Free" | "Row";
        navigatorBackSync?: string | DayPilot.Navigator;
        notifyCommit?: "Immediate" | "Queue";
        overrideWheelScrolling?: boolean;
        progressiveRowRendering?: boolean;
        progressiveRowRenderingPreload?: number;
        resourceBubble?: DayPilot.Bubble;
        resourceCollapseHandling?: "Enabled" | "CallBack";
        resourceExpandHandling?: "Enabled" | "CallBack";
        resources?: ResourceData[];
        rowClickHandling?: "Enabled" | "Disabled" | "CallBack" | "Edit" | "Select";
        rowCreateHandling?: "Disabled" | "Enabled" | "CallBack";
        rowCreateHeight?: number;
        rowCreateHtml?: string;
        rowDoubleClickHandling?: "Disabled" | "Enabled" | "CallBack" | "Select" | "Edit";
        rowDragHandleWidth?: number;
        rowEditHandling?: "Update" | "CallBack";
        rowHeaderColumnDefaultWidth?: number;
        rowHeaderColumnResizedHandling?: "Update" | "CallBack";
        rowHeaderColumns?: { title?: string, text?: string, html?: string, width?: number, display?: string, sort?: string }[];
        rowHeaderColumnsMode?: "Tabular" | "Legacy";
        rowHeaderHideIconEnabled?: boolean;
        rowHeaderScrolling?: boolean;
        rowHeaderSplitterWidth?: number;
        rowHeaderWidth?: number;
        rowHeaderWidthAutoFit?: boolean;
        rowHeaderWidthMarginRight?: number;
        rowMarginBottom?: number;
        rowMarginTop?: number;
        rowMinHeight?: number;
        rowMoveHandling?: "Disabled" | "Update" | "CallBack" | "Notify";
        rowRightClickHandling?: "ContextMenu" | "Enabled" | "Disabled";
        rowSelectHandling?: "Update" | "CallBack" | "Notify";
        rowsLoadMethod?: "GET" | "POST";
        rowSortingMode?: "LeavesOnly" | "ParentsOnly";
        scale?: "Manual" | "CellDuration" | "Minute" | "Hour" | "Day" | "Week" | "Month" | "Year";
        scrollDelayCells?: number;
        scrollDelayDynamic?: number;
        scrollDelayEvents?: number;
        scrollDelayFloats?: number;
        scrollDelayRows?: number;
        scrollStep?: number;
        scrollX?: number;
        scrollY?: number;
        selectedRows?: string[] | number[];
        separators?: SeparatorData[];
        showNonBusiness?: boolean;
        showToolTip?: boolean;
        snapToGrid?: boolean;
        snapToGridEventResizing?: boolean;
        snapToGridEventMoving?: boolean;
        snapToGridTimeRangeSelecting?: boolean;
        sortDirections?: SortDirection[];
        startDate?: DayPilot.Date | string;
        syncResourceTree?: boolean;
        tapAndHoldTimeout?: number;
        theme?: string;
        timeFormat?: "Auto" | "Clock12Hours" | "Clock24Hours";
        timeHeaderClickHandling?: "Enabled" | "Disabled";
        timeHeaderTextWrappingEnabled?: boolean;
        timeHeaders?: TimeHeaderData[];
        timeRangeClickHandling?: "Enabled" | "Disabled";
        timeRangeDoubleClickHandling?: "Disabled" | "CallBack" | "Enabled";
        timeRangeRightClickHandling?: "ContextMenu" | "Enabled" | "Disabled";
        timeRangeSelectedHandling?: "Enabled" | "Disabled" | "CallBack";
        timeRangeSelectingStartEndEnabled?: boolean;
        timeRangeSelectingStartEndFormat?: string;
        timeline?: TimelineData[];
        treeAnimation?: boolean;
        treeAutoExpand?: boolean;
        treeEnabled?: boolean;
        treeImageMarginLeft?: number;
        treeImageMarginTop?: number;
        treeImageWidth?: number;
        treeImageHeight?: number;
        treeIndent?: number;
        treePreventParentUsage?: boolean;
        useEventBoxes?: "Always" | "Never" | "ShortEventsOnly";
        viewType?: "Days" | "Resources" | "Gantt";
        visible?: boolean;
        watchWidthChanges?: boolean;
        weekStarts?: "Auto" | number;
        width?: number;
        zoomLevels?: ZoomLevel[];
        zoomPosition?: "left" | "right" | "middle";

        onAfterEventRender?: EventHandler;
        onAfterRender?: EventHandler;
        onAfterUpdate?: EventHandler;
        onAutoRefresh?: EventHandler;
        onBeforeCellExport?: EventHandler;
        onBeforeCellRender?: EventHandler;
        onBeforeCornerRender?: EventHandler;
        onBeforeCornerDomAdd?: EventHandler;
        onBeforeCornerDomRemove?: EventHandler;
        onBeforeEventExport?: EventHandler;
        onBeforeEventRender?: EventHandler;
        onBeforeEventDomAdd?: EventHandler;
        onBeforeEventDomRemove?: EventHandler;
        onBeforeGroupRender?: EventHandler;
        onBeforeResHeaderRender?: EventHandler;
        onBeforeRowHeaderColumnRender?: EventHandler;
        onBeforeRowHeaderRender?: EventHandler;
        onBeforeRowHeaderDomAdd?: EventHandler;
        onBeforeRowHeaderDomRemove?: EventHandler;
        onBeforeRowHeaderExport?: EventHandler;
        onBeforeTimeHeaderRender?: EventHandler;
        onBeforeTimeHeaderDomAdd?: EventHandler;
        onBeforeTimeHeaderDomRemove?: EventHandler;
        onBeforeTimeHeaderExport?: EventHandler;
        onCallBackStart?: EventHandler;
        onCallBackEnd?: EventHandler;
        onCellMouseOut?: EventHandler;
        onCellMouseOver?: EventHandler;
        onDimensionsChanged?: EventHandler;
        onEventClick?: EventHandler;
        onEventClicked?: EventHandler;
        onEventDelete?: EventHandler;
        onEventDeleted?: EventHandler;
        onEventDoubleClick?: EventHandler;
        onEventDoubleClicked?: EventHandler;
        onEventEdit?: EventHandler;
        onEventEdited?: EventHandler;
        onEventFilter?: EventHandler;
        onEventMouseOut?: EventHandler;
        onEventMouseOver?: EventHandler;
        onEventMove?: EventHandler;
        onEventMoved?: EventHandler;
        onEventMoving?: EventHandler;
        onEventResize?: EventHandler;
        onEventResized?: EventHandler;
        onEventResizing?: EventHandler;
        onEventRightClick?: EventHandler;
        onEventRightClicked?: EventHandler;
        onEventSelect?: EventHandler;
        onEventSelected?: EventHandler;
        onGridMouseDown?: EventHandler;
        onIncludeTimeCell?: EventHandler;
        onLinkClick?: EventHandler;
        onLinkClicked?: EventHandler;
        onLoadNode?: EventHandler;
        onRectangleSelect?: EventHandler;
        onRectangleSelected?: EventHandler;
        onRectangleSelecting?: EventHandler;
        onResourceCollapse?: EventHandler;
        onResourceExpand?: EventHandler;
        onResourceHeaderClick?: EventHandler;
        onResourceHeaderClicked?: EventHandler;
        onRowClick?: EventHandler;
        onRowClicked?: EventHandler;
        onRowCreate?: EventHandler;
        onRowCreated?: EventHandler;
        onRowDoubleClick?: EventHandler;
        onRowDoubleClicked?: EventHandler;
        onRowEdit?: EventHandler;
        onRowEdited?: EventHandler;
        onRowFilter?: EventHandler;
        onRowHeaderColumnResized?: EventHandler;
        onRowHeaderResized?: EventHandler;
        onRowMouseOver?: EventHandler;
        onRowMouseOut?: EventHandler;
        onRowMove?: EventHandler;
        onRowMoved?: EventHandler;
        onRowMoving?: EventHandler;
        onRowSelect?: EventHandler;
        onRowSelected?: EventHandler;
        onScroll?: EventHandler;
        onTimeHeaderClick?: EventHandler;
        onTimeHeaderClicked?: EventHandler;
        onTimeHeaderRightClick?: EventHandler;
        onTimeHeaderRightClicked?: EventHandler;
        onTimeRangeClick?: EventHandler;
        onTimeRangeClicked?: EventHandler;
        onTimeRangeDoubleClick?: EventHandler;
        onTimeRangeDoubleClicked?: EventHandler;
        onTimeRangeRightClick?: EventHandler;
        onTimeRangeRightClicked?: EventHandler;
        onTimeRangeSelect?: EventHandler;
        onTimeRangeSelected?: EventHandler;
        onTimeRangeSelecting?: EventHandler;
    }

    class SchedulerConfig extends SchedulerPropsAndEvents {
        events?: EventData[];
        links?: LinkData[];
        zoom?: number | string;
    }

    namespace Scheduler {
        function makeDraggable(options: any): void;
        function startDragging(options: any): void;
        function stopDragging(): void;
    }

    class Calendar extends CalendarPropsAndEvents {
        constructor(id: string, options?: CalendarConfig);

        v: string;

        clearSelection(): void;
        dispose(): void;
        exportAs(format?: "svg" | "png" | "jpeg", options?: any): Export;
        getSelection(): DayPilot.Selection;
        hide(): void;
        init(): void;
        message(msg: string, options?: { delay?: number, cssClass?: string }): void;
        show(): void;
        update(options?: CalendarConfig): void;
        visibleStart(): DayPilot.Date;
        visibleEnd(): DayPilot.Date;

        columns: {
            list: CalendarColumnData[];
            load(url: string,
                 success: (args: { data: any; preventDefault(): void; } ) => void,
                 error: (args: { request: XMLHttpRequest, exception: any; } ) => void
            ): void;
            filter(param: any): void;
        };

        events: {
            list: EventData[];
            add(e: DayPilot.Event | EventData): void;
            find(id: string): DayPilot.Event;
            findRecurrent(masterId: string, time: DayPilot.Date | string): DayPilot.Event;
            load(url: string,
                 success: (args: { data: any; preventDefault(): void; } ) => void,
                 error: (args: { request: XMLHttpRequest, exception: any; } ) => void
            ): void;
            remove(e: DayPilot.Event): void;
            update(e: DayPilot.Event): void;
        };

        multiselect: {
            add(e: DayPilot.Event, dontRedraw?: boolean): void;
            clear(dontRedraw?: boolean): void;
            events(): DayPilot.Event[];
            redraw(): void;
            remove(e: DayPilot.Event, dontRedraw?: boolean): void;
        };

    }

    class CalendarPropsAndEvents {
        allDayEnd?: "DateTime" | "Date";
        allDayEventHeight?: number;
        allowEventOverlap?: boolean;
        allowMultiSelect?: boolean;
        api?: number;
        autoRefreshCommand?: string;
        autoRefreshEnabled?: boolean;
        autoRefreshInterval?: number;
        autoRefreshMaxCount?: number;
        backendUrl?: string;
        bubble?: DayPilot.Bubble | string;
        businessBeginsHour?: number;
        businessEndsHour?: number;
        cellDuration?: number;
        cellHeight?: number;
        clientState?: any;
        columnBubble?: DayPilot.Bubble | string;
        columnMarginRight?: number;
        columnsLoadMethod?: "POST" | "GET";
        columnWidthSpec?: "Auto" | "Fixed";
        contextMenu?: DayPilot.Menu | string;
        contextMenuSelection?: DayPilot.Menu | string;
        cornerHtml?: string;
        crosshairColor?: string;
        crosshairOpacity?: number;
        crosshairType?: "Header" | "Full";
        dayBeginsHour?: number;
        dayEndsHour?: number;
        days?: number;
        doubleClickTimeout?: number;
        durationBarVisible?: boolean;
        durationBarWidth?: number;
        eventArrangement?: "SideBySide" | "Cascade" | "Full";
        eventClickHandling?: "Enabled" | "Disabled" | "CallBack" | "Edit" | "Select" | "ContextMenu" | "Bubble";
        eventDeleteHandling?: "Update" | "Disabled" | "CallBack";
        eventDoubleClickHandling?: "Enabled" | "Disabled" | "CallBack" | "Edit" | "Select" | "Bubble";
        eventEditHandling?: "Update" | "CallBack";
        eventHoverHandling?: "Bubble" | "Disabled";
        eventMoveHandling?: "Update" | "CallBack" | "Notify" | "Disabled";
        eventResizeHandling?: "Update" | "CallBack" | "Notify" | "Disabled";
        eventRightClickHandling?: "ContextMenu" | "Disabled" | "CallBack" | "Bubble";
        eventSelectHandling?: "Update" | "CallBack" | "Disabled";
        eventTapAndHoldHandling?: "Move" | "ContextMenu";
        headerClickHandling?: "Enabled" | "CallBack";
        headerDateFormat?: string;
        headerHeight?: number;
        headerLevels?: number;
        height?: number;
        heightSpec?: "BusinessHours" | "BusinessHoursNoScroll" | "Fixed" | "Full" | "Parent100Pct";
        hideFreeCells?: boolean;
        hideUntilInit?: boolean;
        hourWidth?: number;
        initScrollPos?: number;
        loadingLabelText?: string;
        loadingLabelVisible?: boolean;
        locale?: string;
        messageHideAfter?: number;
        moveBy?: "Full" | "Left" | "Top" | "Disabled" | "None";
        notifyCommit?: "Immediate" | "Queue";
        rtl?: boolean;
        showAllDayEvents?: boolean;
        showAllDayEventStartEnd?: boolean;
        showCurrentTime?: boolean;
        showCurrentTimeMode?: "Day" | "Full";
        showCurrentTimeOffset?: number;
        showHeader?: boolean;
        showHours?: boolean;
        showToolTip?: boolean;
        sortDirections?: SortDirection[];
        startDate?: DayPilot.Date | string;
        timeFormat?: "Auto" | "Clock12Hours" | "Clock24Hours";
        timeHeaderCellDuration?: number;
        timeRangeDoubleClickHandling?: "Enabled" | "Disabled" | "CallBack";
        timeRangeSelectedHandling?: "Enabled" | "Disabled" | "CallBack";
        useEventBoxes?: "Always" | "Never" | "ShortEventsOnly";
        viewType?: "Day" | "Days" | "Week" | "WorkWeek" | "Resources";
        weekStarts?: "Auto" | number;
        width?: string;

        onAfterRender?: EventHandler;
        onAfterEventRender?: EventHandler;
        onAjaxError?: EventHandler;
        onBeforeCellRender?: EventHandler;
        onBeforeCornerDomAdd?: EventHandler;
        onBeforeCornerDomRemove?: EventHandler;
        onBeforeHeaderDomAdd?: EventHandler;
        onBeforeHeaderDomRemove?: EventHandler;
        onBeforeHeaderRender?: EventHandler;
        onBeforeTimeHeaderDomAdd?: EventHandler;
        onBeforeTimeHeaderDomRemove?: EventHandler;
        onBeforeTimeHeaderRender?: EventHandler;
        onBeforeEventDomAdd?: EventHandler;
        onBeforeEventDomRemove?: EventHandler;
        onBeforeEventRender?: EventHandler;
        onEventClick?: EventHandler;
        onEventClicked?: EventHandler;
        onEventDoubleClick?: EventHandler;
        onEventDoubleClicked?: EventHandler;
        onEventEdit?: EventHandler;
        onEventEdited?: EventHandler;
        onEventRightClick?: EventHandler;
        onEventRightClicked?: EventHandler;
        onEventDelete?: EventHandler;
        onEventDeleted?: EventHandler;
        onEventMove?: EventHandler;
        onEventMoved?: EventHandler;
        onEventResize?: EventHandler;
        onEventResized?: EventHandler;
        onEventSelect?: EventHandler;
        onEventSelected?: EventHandler;
        onHeaderClick?: EventHandler;
        onHeaderClicked?: EventHandler;
        onTimeRangeSelect?: EventHandler;
        onTimeRangeSelected?: EventHandler;
        onTimeRangeDoubleClick?: EventHandler;
        onTimeRangeDoubleClicked?: EventHandler;
        onColumnFilter?: EventHandler;
    }

    class CalendarConfig extends CalendarPropsAndEvents {
        events?: EventData[];
        columns?: CalendarColumnData[];
    }

    class Month extends MonthPropsAndEvents {
        constructor(id: string, options?: MonthConfig);

        v: string;

        clearSelection(): void;
        dispose(): void;
        exportAs(format?: "svg" | "png" | "jpeg", options?: any): Export;
        hide(): void;
        init(): void;
        message(msg: string, options?: { delay?: number, cssClass?: string }): void;
        show(): void;
        update(options?: MonthConfig): void;
        visibleStart(): DayPilot.Date;
        visibleEnd(): DayPilot.Date;

        events : {
            list: EventData[];
            add(e: DayPilot.Event | EventData): void;
            find(id: string): DayPilot.Event;
            findRecurrent(masterId: string, time: DayPilot.Date | string): DayPilot.Event;
            forRange(start: DayPilot.Date | string, end: DayPilot.Date | string): DayPilot.Event[];
            remove(e: DayPilot.Event): void;
            update(e: DayPilot.Event): void;
        };

        multiselect: {
            add(e: DayPilot.Event, dontRedraw?: boolean): void;
            clear(dontRedraw?: boolean): void;
            events(): DayPilot.Event[];
            redraw(): void;
            remove(e: DayPilot.Event): void;
        };

    }

    class MonthPropsAndEvents {
        allowMultiSelect?: boolean;
        autoRefreshEnabled?: boolean;
        autoRefreshCommand?: string;
        autoRefreshInterval?: number;
        autoRefreshMaxCount?: number;
        backendUrl?: string;
        bubble?: DayPilot.Bubble | string;
        cellHeaderHeight?: number;
        cellHeight?: number;
        cellMarginBottom?: number;
        cellMode?: boolean;
        clientState?: any;
        contextMenu?: DayPilot.Menu | string;
        eventClickHandling?: "Enabled" | "Disabled" | "CallBack" | "Select" | "ContextMenu" | "Bubble";
        eventDoubleClickHandling?: "Enabled" | "Disabled" | "CallBack" | "Select" | "Bubble";
        eventEndTime?: boolean;
        eventHeight?: number;
        eventMoveHandling?: "Update" | "CallBack" | "Notify" | "Disabled";
        eventMoveToPosition?: boolean;
        eventResizeHandling?: "Update" | "CallBack" | "Notify" | "Disabled";
        eventRightClickHandling?: "ContextMenu" | "Enabled" | "Disabled" | "CallBack" | "Bubble";
        eventSelectHandling?: "Update" | "CallBack" | "Disabled";
        eventStartTime?: boolean;
        headerClickHandling?: "Enabled" | "Disabled" | "CallBack";
        headerHeight?: number;
        hideUntilInit?: boolean;
        lineSpace?: number;
        locale?: string;
        messageHideAfter?: number;
        notifyCommit?: "Immediate" | "Queue";
        showWeekend?: boolean;
        showToolTip?: boolean;
        startDate?: DayPilot.Date | string;
        theme?: string;
        timeFormat?: "Auto" | "Clock12Hours" | "Clock24Hours";
        timeRangeDoubleClickHandling?: "Enabled" | "Disabled" | "CallBack";
        timeRangeSelectedHandling?: "Enabled" | "Disabled" | "CallBack";
        viewType?: "Month" | "Weeks";
        weekStarts?: "Auto" | number;
        weeks?: number;
        width?: string;

        onAjaxError?: EventHandler;
        onAfterEventRender?: EventHandler;
        onAfterRender?: EventHandler;
        onBeforeCellRender?: EventHandler;
        onBeforeEventRender?: EventHandler;
        onBeforeHeaderRender?: EventHandler;
        onEventClick?: EventHandler;
        onEventClicked?: EventHandler;
        onEventDoubleClick?: EventHandler;
        onEventDoubleClicked?: EventHandler;
        onEventSelect?: EventHandler;
        onEventSelected?: EventHandler;
        onEventRightClick?: EventHandler;
        onEventRightClicked?: EventHandler;
        onEventMove?: EventHandler;
        onEventMoved?: EventHandler;
        onEventResize?: EventHandler;
        onEventResized?: EventHandler;
        onTimeRangeSelect?: EventHandler;
        onTimeRangeSelected?: EventHandler;
        onHeaderClick?: EventHandler;
        onHeaderClicked?: EventHandler;
        onTimeRangeDoubleClick?: EventHandler;
        onTimeRangeDoubleClicked?: EventHandler;
    }

    class MonthConfig extends MonthPropsAndEvents {
        events?: EventData;
    }

    class Kanban extends KanbanPropsAndEvents {
        constructor(id: string, options?: KanbanConfig);

        v: string;

        hide(): void;
        init(): void;
        dispose(): void;
        message(msg: string, options?: { delay?: number, cssClass?: string }): void;
        show(): void;
        update(options?: KanbanConfig): void;

        cards: {
            list: CardData[];
            add(c: DayPilot.Card): void;
            remove(c: DayPilot.Card): void;
            update(c: DayPilot.Card): void;
        };
        columns: {
            list: KanbanColumnData[];
        };
        swimlanes : {
            list: SwimlaneData[];
        };

    }

    class KanbanPropsAndEvents {
        barWidth?: number;
        cardDeleteHandling?: "Disabled" | "Update";
        cardMarginBottom?: number;
        cardMarginLeft?: number;
        cardMarginRight?: number;
        cardMoveHandling?: "Update" | "Disabled";
        cellMarginBottom?: number;
        cellMarginTop?: number;
        columnHeaderHeight?: number;
        columnMoveHandling?: "Disabled" | "Update";
        columnWidthSpec?: "Auto" | "Fixed";
        crosshairColor?: string;
        height?: number;
        heightSpec?: "Auto" | "Max" | "Fixed" | "Parent100Pct";
        rowMinHeight?: number;
        swimlaneCollapsingEnabled?: boolean;
        swimlaneHeaderWidth?: number;
        swimlaneMoveHandling?: "Disabled" | "Update";
        theme?: string;
        visible?: boolean;

        onCardClick?: EventHandler;
        onCardClicked?: EventHandler;
        onCardDelete?: EventHandler;
        onCardDeleted?: EventHandler;
        onCardMove?: EventHandler;
        onCardMoved?: EventHandler;
        onColumnMove?: EventHandler;
        onColumnMoved?: EventHandler;
        onHeightChanged?: EventHandler;
        onSwimlaneMove?: EventHandler;
        onSwimlaneMoved?: EventHandler;
    }

    class KanbanConfig extends KanbanPropsAndEvents {
        cards?: CardData[];
        columns?: KanbanColumnData[];
        swimlanes?: SwimlaneData[];
    }


    class Gantt extends GanttPropsAndEvents {
        constructor(id: string, options?: GanttConfig);

        v: string;

        commandCallBack(command: string, data?: any): void;
        init(): void;
        dispose(): void;
        message(html: string): void;
        scrollTo(date: DayPilot.Date, animated?: "fast" | "normal" | "slow" | "linear" | number, position?: "left" | "middle" | "right"): void;
        scrollTo(date: string, animated?: "fast" | "normal" | "slow" | "linear" | number, position?: "left" | "middle" | "right"): void;
        scrollTo(pixels: number, animated?: "fast" | "normal" | "slow" | "linear" | number, position?: "left" | "middle" | "right"): void;
        setHeight(pixels: number): void;
        update(options?: GanttConfig): void;

        links: {
            list: LinkData[];
            add(link: DayPilot.Link): void;
            find(id: string): DayPilot.Link;
            findByFromTo(from: DayPilot.Date | string, to: DayPilot.Date | string): DayPilot.Link;
            remove(link: DayPilot.Link): void;
        };
        rows: {
            selection: {
                add(task: DayPilot.Task): void;
                clear(): void;
                get(): DayPilot.Task[];
            };
        };
        tasks: {
            list: TaskData[];
            add(task: DayPilot.Task): void;
            find(id: string): DayPilot.Task;
            remove(task: DayPilot.Task): void;
            update(task: DayPilot.Task): void;
        };

    }

    class GanttPropsAndEvents {
        autoRefreshCommand?: string;
        autoRefreshEnabled?: boolean;
        autoRefreshInterval?: number;
        autoRefreshMaxCount?: number;
        autoScroll?: "Drag" | "Always" | "Disabled";
        bubbleCell?: DayPilot.Bubble | string;
        bubbleRow?: DayPilot.Bubble | string;
        bubbleTask?: DayPilot.Bubble | string;
        cellDuration?: number;
        cellGroupBy?: GroupBy;
        cellWidth?: number;
        cellWidthSpec?: "Auto" | "Fixed";
        completeBarHeight?: number;
        completeBarVisible?: boolean;
        contextMenuTask?: DayPilot.Menu | string;
        contextMenuLink?: DayPilot.Menu | string;
        contextMenuRow?: DayPilot.Menu | string;
        cornerHtml?: string;
        crosshairType?: "Full" | "Header" | "Disabled";
        days?: number;
        doubleClickTimeout?: number;
        floatingTasks?: boolean;
        floatingTimeHeaders?: boolean;
        headerHeight?: number;
        height?: number;
        heightSpec?: "Auto" | "Max" | "Fixed" | "Parent100Pct" | "Max100Pct";
        hideUntilInit?: boolean;
        linkBottomMargin?: number;
        linkCreateHandling?: "Disabled" | "Update" | "CallBack" | "Notify";
        linkPointSize?: number;
        loadingLabelText?: string;
        loadingLabelVisible?: boolean;
        locale?: string | DayPilot.Locale;
        messageBarPosition?: "Top" | "Bottom";
        messageHideAfter?: number;
        progressiveRowRendering?: boolean;
        progressiveRowRenderingPreload?: number;
        progressiveTaskRendering?: "Progressive" | "Disabled";
        progressiveTaskRenderingMargin?: number;
        progressiveTaskRenderingCacheSize?: number;
        progressiveTaskRenderingCacheSweeping?: boolean;
        rowClickHandling?: "Enabled" | "Disabled" | "CallBack" | "Edit" | "Select";
        rowCreateHandling?: "Disabled" | "Enabled" | "CallBack";
        rowDoubleClickHandling?: "Disabled" | "Enabled" | "CallBack" | "Select" | "Edit";
        rowEditHandling?: "Update" | "CallBack";
        rowHeaderHideIconEnabled?: boolean;
        rowHeaderScrolling?: boolean;
        rowHeaderSplitterWidth?: number;
        rowHeaderWidth?: number;
        rowHeaderWidthAutoFit?: boolean;
        rowMarginBottom?: number;
        rowMinHeight?: number;
        rowMoveHandling?: "Disabled" | "Update" | "CallBack" | "Notify";
        rowSelectHandling?: "Update" | "CallBack" | "Notify";
        scale?: "Manual" | "CellDuration" | "Minute" | "Hour" | "Day" | "Week" | "Month" | "Year";
        scrollDelayCells?: number;
        scrollDelayTasks?: number;
        scrollDelayFloats?: number;
        selectedRows?: string[] | number[];
        separators?: SeparatorData[];
        snapToGrid?: boolean;
        startDate?: DayPilot.Date | string;
        tapAndHoldTimeout?: number;
        taskClickHandling?: "Enabled" | "Disabled" | "CallBack" | "Edit" | "Select" | "ContextMenu" | "Bubble";
        taskDoubleClickHandling?: "Enabled" | "Disabled" | "CallBack" | "Edit" | "Select" | "ContextMenu" | "Bubble";
        taskGroupMode?: "Auto" | "Manual";
        taskHeight?: number;
        taskHtmlLeftMargin?: number;
        taskHtmlRightMargin?: number;
        taskMoveHandling?: "Update" | "Disabled" | "CallBack" | "Notify";
        taskMovingStartEndEnabled?: boolean;
        taskMovingStartEndFormat?: boolean;
        taskResizeHandling?: "Update" | "Disabled" | "CallBack" | "Notify";
        taskResizeMargin?: number;
        taskResizingStartEndEnabled?: boolean;
        taskResizingStartEndFormat?: boolean;
        taskRightClickHandling?: "Enabled" | "Disabled" | "CallBack" | "Edit" | "Select" | "ContextMenu" | "Bubble";
        tasksLoadMethod?: "GET" | "POST";
        taskVersionHeight?: number;
        taskVersionMargin?: number;
        taskVersionPosition?: "Above" | "Below";
        taskVersionsEnabled?: boolean;
        theme?: string;
        timeHeaders?: TimeHeaderData[];
        timeline?: TimelineData[];
        treeAutoExpand?: boolean;
        treeIndent?: number;
        treeImageMarginLeft?: number;
        treeImageMarginTop?: number;
        treeImageMarginRight?: number;
        treeImageWidth?: number;
        treeImageHeight?: number;
        useEventBoxes?: "Always" | "Never" | "ShortEventsOnly";
        visible?: boolean;

        onAfterRender?: EventHandler;
        onBeforeCellRender?: EventHandler;
        onBeforeCornerRender?: EventHandler;
        onBeforeRowHeaderRender?: EventHandler;
        onBeforeTaskRender?: EventHandler;
        onBeforeTimeHeaderRender?: EventHandler;
        onColumnResized?: EventHandler;
        onLinkCreate?: EventHandler;
        onLinkCreated?: EventHandler;
        onRowClick?: EventHandler;
        onRowClicked?: EventHandler;
        onRowDoubleClick?: EventHandler;
        onRowDoubleClicked?: EventHandler;
        onRowEdit?: EventHandler;
        onRowEdited?: EventHandler;
        onRowMove?: EventHandler;
        onRowMoved?: EventHandler;
        onRowMoving?: EventHandler;
        onRowSelect?: EventHandler;
        onRowSelected?: EventHandler;
        onTaskClick?: EventHandler;
        onTaskClicked?: EventHandler;
        onTaskDoubleClick?: EventHandler;
        onTaskDoubleClicked?: EventHandler;
        onTaskMove?: EventHandler;
        onTaskMoved?: EventHandler;
        onTaskMoving?: EventHandler;
        onTaskResize?: EventHandler;
        onTaskResized?: EventHandler;
        onTaskResizing?: EventHandler;
        onTaskRightClick?: EventHandler;
        onTaskRightClicked?: EventHandler;
    }

    class GanttConfig extends GanttPropsAndEvents{
        tasks?: TaskData[];
        links?: LinkData[];
    }

    class Navigator extends NavigatorPropsAndEvents {
        constructor(id: string, options?: NavigatorConfig);

        v: string;

        init(): void;
        dispose(): void;
        update(options?: NavigatorConfig): void;
        select(date: DayPilot.Date | string): void;
        hide(): void;
        show(): void;
        visibleEnd(): DayPilot.Date;
        visibleStart(): DayPilot.Date;

        events: {
            list: EventDataShort[];
        };
    }

    class NavigatorPropsAndEvents {
        bound?: string;
        cellHeight?: number;
        cellWidth?: number;
        command?: string;
        dayHeaderHeight?: number;
        locale?: string;
        orientation?: "Vertical" | "Horizontal";
        rowsPerMonth?: "Auto" | "Six";
        selectionDay?: DayPilot.Date;
        selectionEnd?: DayPilot.Date;
        selectionStart?: DayPilot.Date;
        selectMode?: "day" | "week" | "month" | "none";
        showMonths?: number;
        showWeekNumbers?: boolean;
        skipMonths?: number;
        startDate?: DayPilot.Date | string;
        theme?: string;
        titleHeight?: number;
        weekStarts?: "Auto" | number;
        weekNumberAlgorithm?: "Auto" | "US" | "ISO8601";
        timeRangeSelectedHandling?: "Bind" | "None";
        visibleRangeChangedHandling?: "Enabled" | "Disabled" | "CallBack";

        onAjaxError?: EventHandler;
        onBeforeCellRender?: EventHandler;
        onTimeRangeSelect?: EventHandler;
        onTimeRangeSelected?: EventHandler;
        onVisibleRangeChange?: EventHandler;
        onVisibleRangeChanged?: EventHandler;
    }

    class NavigatorConfig extends NavigatorPropsAndEvents {
        events?: EventData[];
    }

    class Bubble {
        constructor(options?: any);

        v: string;

        onLoad: EventHandler;

        showEvent(e: DayPilot.Event): void;
        showHtml(html: string, element?: HTMLElement): void;

        animated: boolean;
        animation: "fast" | "slow" | "jump";
        hideAfter: number;
        loadingText: number;
        position: "Above" | "Mouse" | "EventTop";
        showAfter: number;
        showLoadingLabel: boolean;
        theme: string;
        zIndex: number;
    }

    namespace Bubble {
        function hide(): void;
    }

    class Locale {
        constructor(id: string, properties: {
            dayNames: string[];
            dayNamesShort: string[];
            monthNames: string[];
            monthNamesShort: string[];
            timePattern: string;
            datePattern: string;
            dateTimePattern: string;
            timeFormat: "Clock12Hours" | "Clock24Hours";
            weekStarts: number;
        });

        datePattern: string;
        dateTimePattern: string;
        dayNames: string[];
        dayNamesShort: string[];
        monthNames: string[];
        monthNamesShort: string[];
        timeFormat: "Clock12Hours" | "Clock24Hours";
        timePattern: string;
        weekStarts: number;
    }

    namespace Locale {
        function register(locale: DayPilot.Locale): void;
    }

    class Menu {
        constructor(options?: {
            hideOnMouseOut?: boolean;
            items?: MenuItemData[];
            menuTitle?: string;
            onShow?: EventHandler;
            showMenuTitle?: boolean;
            zIndex?: number;
            theme?: string;
        });

        v: string;

        //className: string;
        hideOnMouseOut: boolean;
        items: MenuItemData[];
        menuTitle: string;
        showMenuTitle: boolean;
        zIndex: number;
        theme: string;

        show(target?: any): void;
        hide(): void;
    }

    namespace Menu {
        function hide(): void;
    }

    class MenuBar {
        constructor(id: string, options?: any);
        items: any[];
        init(): void;
    }

    class Date {
        constructor(str?: string | DayPilot.Date);
        constructor(date: GlobalDate, isLocal?: boolean);

        addDays(days: number): DayPilot.Date;
        addHours(hours: number): DayPilot.Date;
        addMilliseconds(millis: number): DayPilot.Date;
        addMinutes(minutes: number): DayPilot.Date;
        addMonths(months: number): DayPilot.Date;
        addSeconds(seconds: number): DayPilot.Date;
        addTime(ticks: number): DayPilot.Date;
        addTime(duration: DayPilot.Duration): DayPilot.Date;
        addYears(years: number): DayPilot.Date;
        dayOfWeek(): number;
        dayOfYear(): number;
        daysInMonth(): number;
        daysInYear(): number;
        equals(another: DayPilot.Date): boolean;
        firstDayOfMonth(): DayPilot.Date;
        firstDayOfWeek(locale?: string | DayPilot.Locale): DayPilot.Date;
        firstDayOfWeek(firstDayOfWeek?: number): DayPilot.Date;
        firstDayOfYear(): DayPilot.Date;
        getDatePart(): DayPilot.Date;
        getDay(): number;
        getDayOfWeek(): number;
        getYear(): number;
        getHours(): number;
        getMilliseconds(): number;
        getMinutes(): number;
        getMonth(): number;
        getSeconds(): number;
        getTime(): number;
        getTimePart(): number;
        getTotalTicks(): number;
        getYear(): number;
        lastDayOfMonth(): DayPilot.Date;
        toDate(): GlobalDate;
        toDateLocal(): GlobalDate;
        toString(pattern?: string, locale?: string | DayPilot.Locale): string;
        toStringSortable(): string;
        weekNumber(): number;
        weekNumberISO(): number;
    }

    namespace Date {
        function fromYearMonthDay(year: number, month: number, day: number): DayPilot.Date;
        function parse(input: string, pattern: string, locale?: string | DayPilot.Locale): DayPilot.Date;
        function today(): DayPilot.Date;
        namespace Cache {
            function clear(): void;
        }
    }

    namespace Util {
        function overlaps(start1: DayPilot.Date, end1: DayPilot.Date, start2: DayPilot.Date, end2: DayPilot.Date);
        function overlaps(start1: number, end1: number, start2: number, end2: number);
    }

    namespace Modal {
        function prompt(message: string, defaultValue?: string, options?: any) : Promise;
        function alert(message: string, options?: any) : Promise;
        function confirm(message: string, options?: any) : Promise;
        function form(form?: any[], data?: any, options?: any): Promise;
    }

    class Promise {
        constructor(f: (onFulfilled: (...args: any[]) => void, onRejected?: (...args: any[]) => void) => void);
        then(onFulfilled: (...args: any[]) => void, onRejected?: (...args: any[]) => void): Promise;
        catch(onRejected: (...args: any[]) => void): Promise;
    }

    class Duration {

        constructor(ticks: number);
        constructor(start: DayPilot.Date | string, end: DayPilot.Date | string);

        ticks: number;
        toString(pattern?:string): string;

        totalMilliseconds(): number;
        totalSeconds(): number;
        totalMinutes(): number;
        totalHours(): number;
        totalDays(): number;

        milliseconds(): number;
        seconds(): number;
        minutes(): number;
        hours(): number;
        days(): number;
    }

    namespace Duration {
        function weeks(i: number): DayPilot.Duration;
        function days(i: number): DayPilot.Duration;
        function hours(i: number): DayPilot.Duration;
        function minutes(i: number): DayPilot.Duration;
        function seconds(i: number): DayPilot.Duration;
    }

    class Event {
        constructor(data: EventData);
        data: any;

        start(): DayPilot.Date;
        start(newStart: DayPilot.Date): void;

        end(): DayPilot.Date;
        end(newEnd: DayPilot.Date): void;

        id(): string;

        text(): string;
        text(newText: string): void;

        resource(): string;
        resource(newResource: string): void;

        duration(): DayPilot.Duration;
    }

    class Task {
        constructor(data: TaskData);

        data: TaskData;

        id(): string | number;
        id(newId: string): void;

        text(): string;
        text(newText: string): void;

        start(): DayPilot.Date;
        start(newStart: DayPilot.Date | string): void;

        end(): DayPilot.Date;
        end(newEnd: DayPilot.Date | string): void;

        complete(): number;
        complete(newComplete: number): void;

        type(): TaskType;
        type(newType: TaskType): void;

        children(): DayPilot.Task[];

        row: {
            expand(): void;
            expanded(): boolean;
            collapse(): void;
            toggle(): void;
        }
    }

    class Card {
        constructor(data: CardData);
        data: CardData;
    }

    class Link {
        constructor(data: LinkData);
        data: LinkData;
    }

    class Row {
        addClass(className: string): void;
        children(): DayPilot.Row[];
        parent(): DayPilot.Row;
        remove(): void;
        collapse(): void;
        column(i: number): RowHeaderColumn;
        expand(): void;
        removeClass(className: string): void;
        toggle(): void;
        events: {
            all(): DayPilot.Event[];
            isEmpty(): boolean;
            forRange(start: string | DayPilot.Date, end: string | DayPilot.Date): DayPilot.Event[];
            totalDuration(): DayPilot.Duration;
        };
        cells: {
            all(): CellArray;
            forRange(start: string | DayPilot.Date, end: string | DayPilot.Date): CellArray;
            totalDuration(): DayPilot.Duration;
        };
        groups: {
            all(): EventGroup[];
            collapseAll(): void;
            collapsed(): EventGroup[];
            expandAll(): void;
            expanded(): EventGroup[];
        };

        id: string;
        name: string;
        start: DayPilot.Date;
        data: any;
        index: number;
        displayY: number;

        hidden: boolean;
        hiddenUsingFilter: boolean;
    }

    class Selection {
        start: DayPilot.Date;
        end: DayPilot.Date;
        resource: string;
    }

    class Export {
        toElement(): HTMLElement;
        toHtml(): string;
        toDataUri(): string;
        toBlob(): Blob;
        print(options?: any): void;
        download(filename?: string): void;
        dimensions(): { width: number, height: number };
    }

    interface CardData {
        id: string | number;
        name: string;
        text?: string;
        html?: string;
        column: string | number;
        swimlane?: string | number;
        barColor?: string;
    }

    interface KanbanColumnData {
        id: string | number;
        name: string;
        barColor?: string;
    }

    interface SwimlaneData {
        id: string | number;
        name: string;
        collapsed?: boolean;
    }

    interface RowHeaderColumn {
        html(newHtml?: string): string | void;
    }

    interface EventGroup {
        expand(): void;
        collapse(): void;
    }

    interface CalendarColumnData {
        name: string;
        id?: string;
        start?: DayPilot.Date | string;
        html?: string;
        toolTip?: string;
        children?: CalendarColumnData[];
    }

    type GroupBy = "Hour" | "Day" | "Week" | "Month"  | "Quarter" | "Year" | "Cell" | "None";
    type SortDirection = "asc" | "desc";
    type TaskType = "Task" | "Milestone" | "Group";
    type LinkType = "FinishToStart" | "FinishToFinish" | "StartToStart" | "StartToFinish";

    interface ZoomLevel {
        properties: any;
        [prop: string]: any;
    }

    interface TimelineData {
        start: DayPilot.Date | string;
        end: DayPilot.Date | string;
        width?: number;
    }

    interface TimeHeaderData {
        groupBy: GroupBy;
        format?: string;
    }

    interface MenuItemData {
        action?: "CallBack" | "PostBack";
        command?: string;
        cssClass?: string;
        disabled?: boolean;
        hidden?: boolean;
        href?: string;
        icon?: string;
        image?: string;
        items?: MenuItemData[];
        onClick?: EventHandler;
        tags?: any;
        target?: string;
        text: string;
    }

    interface EventHandler {
        (args?: any): void;
    }

    interface SeparatorData {
        location: DayPilot.Date | string;
        color?: string;
        layer?: "AboveEvents" | "BelowEvents";
        opacity?: number;
        width?: number;
        cssClass?: string;
    }

    interface CellArray extends Array<Cell> {
        addClass(className: string): CellArray;
        removeClass(className: string): CellArray;
        html(html: string): CellArray;
        invalidate(): CellArray;
    }

    interface Cell {
        start: DayPilot.Date;
        end: DayPilot.Date;
        resource: string;
        isParent: boolean;
        update(): void;
        utilization(name?: string): number;
        events(): DayPilot.Event[];
        div: HTMLElement;
        properties: any;
    }

    interface EventDataShort {
        start: string | DayPilot.Date;
        end: string | DayPilot.Date;
    }

    interface EventData {
        start: string | DayPilot.Date;
        end: string | DayPilot.Date;
        id: string | number;
        text: string;
        resource?: string | number;

        areas?: AreaData[];
        backColor?: string;
        backImage?: string;
        backRepeat?: string;
        borderColor?: string;
        bubbleHtml?: string;
        clickDisabled?: boolean;
        contextMenu?: DayPilot.Menu | string;
        cssClass?: string;
        deleteDisabled?: boolean;
        doubleClickDisabled?: boolean;
        fontColor?: string;
        hidden?: boolean;
        html?: string;
        moveDisabled?: boolean;
        recurrent?: boolean;
        recurrentMasterId?: boolean;
        resizeDisabled?: boolean;
        rightClickDisabled?: boolean;
        sort?: string[];
        tags?: any;
        toolTip?: string;

        // scheduler
        barBackColor?: string;
        barColor?: string;
        barHidden?: boolean;
        complete?: number;
        container?: number | string;
        height?: number;
        htmlLeft?: string;
        htmlRight?: string;
        moveVDisabled?: boolean;
        moveHDisabled?: boolean;
        versions?: VersionData[];
    }

    interface VersionData {
        start: string | DayPilot.Date;
        end: string | DayPilot.Date;
        id?: string | number;
        text?: string;
        html?: string;
        backColor?: string;
        fontColor?: string;
        borderColor?: string;
        backImage?: string;
        backRepeat?: string;
        complete?: number;
        barColor?: string;
        barBackColor?: string;
        barImageUrl?: string;
        barHidden?: boolean;
        htmlRight?: string;
        htmlLeft?: string;
        cssClass?: string;
        toolTip?: string;
    }

    interface LinkData {
        from: string;
        to: string;
        id?: string;
        type?: LinkType;
        width?: number;
        color?: string;
        style?: string;
        cssClass?: string;
        layer?: "Above" | "Below";
    }

    interface TaskData {
        id: string;
        text: string;
        start: DayPilot.Date | string;
        end?: DayPilot.Date | string;
        type?: TaskType;
        complete?: number;
        children?: TaskData[];
        tags?: any;

        box?: {
            areas?: AreaData[];
            backColor?: string;
            backImage?: string;
            backRepeat?: string;
            barBackColor?: string;
            barColor?: string;
            barHidden?: boolean;
            bubbleHtml?: string;
            clickDisabled?: boolean;
            contextMenu?: DayPilot.Menu | string;
            cssClass?: string;
            doubleClickDisabled?: boolean;
            html?: string;
            htmlLeft?: string;
            htmlRight?: string;
            moveDisabled?: boolean;
            resizeDisabled?: boolean;
            rightClickDisabled?: boolean;
            toolTip?: string;
        };

        row?: {
            areas?: AreaData[];
            backColor?: string;
            collapsed?: boolean;
            contextMenu?: DayPilot.Menu | string;
            cssClass?: string;
            hidden?: boolean;
            html?: string;
            marginBottom?: number;
            minHeight?: number;
            toolTip?: string;
        };
    }

    interface ResourceData {
        id: string | number;
        name?: string;

        areas?: AreaData[];
        ariaLabel?: string;
        backColor?: string;
        bubbleHtml?: string;
        fontColor?: string;
        cellsDisabled?: boolean;
        children?: ResourceData[];
        columns?: {html?: string; cssClass?: string; backColor?: string}[];
        cssClass?: string;
        contextMenu?: Menu | string;
        dynamicChildren?: boolean;
        eventHeight?: number;
        eventStackingLineHeight?: number;
        expanded?: boolean;
        frozen?: "top" | "bottom";
        html?: string;
        marginBottom?: number;
        marginTop?: number;
        minHeight?: number;
        moveDisabled?: boolean;
        tags?: any;
        toolTip?: string;
        [prop: string]: any;
    }

    interface AreaData {
        action?: "None" | "JavaScript" | "ContextMenu" | "HoverMenu" | "ResizeEnd" | "ResizeStart" | "Move" | "Bubble";
        backColor?: string;
        background?: string;
        bottom?: number;
        bubble?: Bubble;
        cssClass?: string;
        end?: Date | string;
        fontColor?: string;
        height?: number;
        horizontalAlignment?: "left" | "right" | "bottom";
        html?: string;
        icon?: string;
        id?: string | number;
        image?: string;
        js: (args:any) => void | string;
        left?: number;
        menu?: Menu | string;
        onClick?: (args:any) => void;
        onClicked?: (args:any) => void;
        padding?: number;
        right?: number;
        start?: Date | string;
        style?: string;
        toolTip?: string;
        top?: number;
        verticalAlignment?: "top" | "bottom" | "center";
        visibility?: "Hover" | "Visible" | "TouchVisible";
        width?: number;
    }

    function guid(): string;

}

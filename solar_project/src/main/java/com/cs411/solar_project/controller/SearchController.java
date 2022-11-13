package com.cs411.solar_project.controller;

import com.cs411.solar_project.service.SearchService;
import org.json.JSONException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@RestController
public class SearchController {
    private SearchService searchService;

    @Autowired
    public SearchController(SearchService searchService) {
        this.searchService = searchService;
    }

    @GetMapping(value = "/search")
    public List<List<String>> searchOrder(@RequestParam(name = "user_address") String usersAddress,
                                     LocalDateTime pickUpTime) throws IOException, JSONException {

        List<List<String>> companies_info = searchService.getCompanyInfo(usersAddress);
        return companies_info;
    }
}

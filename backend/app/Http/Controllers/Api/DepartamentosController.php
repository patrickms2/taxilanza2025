<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use App\Repositories\DepartamentosRepositoryInterface;

class DepartamentosController extends Controller
{
    protected DepartamentosRepositoryInterface $departamentosRepository;
    protected Request $request;

    public function __construct(DepartamentosRepositoryInterface $departamentosRepository, Request $request)
    {
        $this->departamentosRepository = $departamentosRepository;
        $this->request = $request;
    }

    public function index()
    {
        $payload = $this->departamentosRepository->findAll($this->request->all());

        $fileType = request()->query('filetype');
        if($fileType && $fileType == 'csv') {
            header("Content-type: text/csv");
            header("Cache-Control: no-store, no-cache");
            header('Content-Disposition: attachment; filename="departamentos.csv"');
            $rows = $payload['rows'];
            $fields = array('id','id_departamento','nombre','color',

        );

            $f = fopen('php://output', 'w');

            fputcsv($f, $fields);

            foreach($rows as $row)
                {
                    fputcsv($f, array($row['id'],$row['id_departamento'],$row['nombre'],$row['color'],

        ));
                }

            fclose($f);

        } else {
            return response()->json($payload);
        }
    }

    public function count()
    {
        $payload = $this->departamentosRepository->findAll($this->request->all());

        $countPayload = ['count' => $payload['count']];
        return response()->json($countPayload);
    }

    public function show($id)
    {
        $payload = $this->departamentosRepository->findById($id);

        return response()->json($payload);
    }

    public function store()
    {
        $payload = $this->departamentosRepository->create($this->request->all(), auth()->user());

        return response()->json($payload);
    }

    public function update($id)
    {
        $payload = $this->departamentosRepository->update($id, $this->request->all(), auth()->user());

        return response()->json($payload);
    }

    public function destroy($id)
    {
        $this->departamentosRepository->destroy($id);

        return response()->json(true, 204);
    }

    public function findAllAutocomplete()
    {
        $payload = $this->departamentosRepository->findAllAutocomplete($this->request->only(['query', 'limit']));

        return response()->json($payload);
    }
}

